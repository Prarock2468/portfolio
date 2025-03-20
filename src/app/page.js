import ExperienceGrid from "@/component/experience/Gridlayout";
import HeroBanner from "@/component/heroBanner/heroBanner";
import ProjectComponent from "@/component/project/project";
import Service from "@/component/services/service";
import Kickstart from "@/shared/kickstart/kickstart";
import Testimonial from "@/shared/testimonial/testimonial";
export default function Home() {
  
  return (
    <>
      <HeroBanner />
      <ExperienceGrid />
      <Testimonial />
      <ProjectComponent />
      <Service />
      <Kickstart />
    </>
  );
}
