import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const control = useAnimation();
  
  useEffect(() => {
    const updateHorizontalLineHeight = () => {
      const timelineBlocks = document.querySelectorAll(".cd-timeline-block");
      const visibleBlocks = Array.from(timelineBlocks).filter(
        (block) =>
          block.getBoundingClientRect().top <= window.innerHeight * 0.75
      );

      if (visibleBlocks.length > 0) {
        const firstBlock = visibleBlocks[0];
        const lastBlock = visibleBlocks[visibleBlocks.length - 1];
        const height =
          lastBlock.getBoundingClientRect().top +
          lastBlock.offsetHeight / 2 -
          firstBlock.getBoundingClientRect().top;
        document.querySelector(".horizontalLine").style.height = `${height}px`;
      }
    };

    window.addEventListener("scroll", updateHorizontalLineHeight);
    window.addEventListener("resize", updateHorizontalLineHeight);

    return () => {
      window.removeEventListener("scroll", updateHorizontalLineHeight);
      window.removeEventListener("resize", updateHorizontalLineHeight);
    };
  }, []);
 
  return (
    <section className="timeline_section">
      <h2 className="apmPageTitle">Timeline</h2>
      <div className="cd-container">
        <motion.div className="horizontalLine" initial={{ height: 0 }} />
        <div className="cd-containerIn">
          {timelineData.map((block, index) => (
            <TimelineBlock
              key={index}
              title={block.title}
              description={block.description}
              imgSrc={block.imgSrc}
              altText={block.altText}
              control={control}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineBlock = ({
  title,
  description,
  imgSrc,
  altText,
  control,
  index,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.75 });

  const isOdd = index % 2 !== 0;

  useEffect(() => {
    if (inView) {
      control.start({ opacity: 1, x: 0 });
    }
  }, [inView, control]);

  const containerControl = useAnimation(); // Control for container animation
  const [containerRef, inViewContainer] = useInView({
    triggerOnce: true,
    threshold: 0.2, // When 20% of the container is visible
  });
  useEffect(() => {
    if (inViewContainer) {
      containerControl.start({ opacity: 1, y: 0 });
    }
  }, [inViewContainer, containerControl]);
  return (
    <motion.div
      className="cd-container"
      ref={containerRef}
      initial={{ opacity: 0, y: 100 }} // Start hidden and below the viewport
      animate={containerControl}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="horizontalLine" initial={{ height: 0 }} />
      <div className="cd-containerIn">
        {timelineData.map((block, index) => (
          <TimelineBlock
            key={index}
            title={block.title}
            description={block.description}
            imgSrc={block.imgSrc}
            altText={block.altText}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

const timelineData = [
  {
    title: "Call for Applications",
    description: "Open invitation for startups to apply.",
    imgSrc: "/img/apmplify/icon/CP.png",
    altText: "Call for Applications Image",
  },
  {
    title: "Screening Vettings",
    description:
      "Thorough evaluation process to shortlist the most promising projects.",
    imgSrc: "/img/apmplify/icon/sceening.png",
    altText: "Movie",
  },
  {
    title: "Selection Day",
    description:
      "Top-rated startups will pitch their ideas to the selection committee and engage with the online community.",
    imgSrc: "/img/apmplify/icon/selection.png",
    altText: "Picture",
  },
  {
    title: "Experts Led Sessions",
    description: "The selected Top 10 startups enter a 45-day program.",
    imgSrc: "/img/apmplify/icon/session.png",
    altText: "Location",
  },
  {
    title: "KOL Activation",
    description:
      "Simultaneously, KOLs promote the startups, driving visibility and community engagement.",
    imgSrc: "/img/apmplify/icon/activation.png",
    altText: "Location",
  },
  {
    title: "Virtual Pitch Sessions",
    description: "Startups pitch to the community with expert-led preparation.",
    imgSrc: "/img/apmplify/icon/virtual-meeting.png",
    altText: "Movie",
  },
  {
    title: "Public Sale",
    imgSrc: "/img/apmplify/icon/sale.png",
    altText: "Movie",
  },
];

export default Timeline;
