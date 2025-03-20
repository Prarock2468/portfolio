"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MousePointerAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen">
      {/* Animated pointer */}
      <motion.div
        className="w-8 h-8 bg-blue-500 pointerwidth pointer-events-none"
        style={{
          translateX: mousePosition.x,
          translateY: mousePosition.y,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </div>
  );
}
