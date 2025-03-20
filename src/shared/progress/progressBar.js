'use client'

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const DragComponent = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <motion.div
            ref={ref}
            style={{ ...ball, x, y }}
            className="follow-pointer"
        />
    );
};

const spring = { damping: 20, stiffness: 300 };

const useFollowPointer = (ref) => {
    const xPoint = useMotionValue(0);
    const yPoint = useMotionValue(0);
    const x = useSpring(xPoint, spring);
    const y = useSpring(yPoint, spring);

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current;

            // Center the ball around the mouse pointer
            xPoint.set(clientX - element.offsetWidth / 2);
            yPoint.set(clientY - element.offsetHeight / 2);
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return { x, y };
};

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: "50%",
    position: "fixed",  // Ensures it can move across the entire page
    zIndex: 9999,       // Top-most layer
    pointerEvents: "none", // Ensures it doesn’t interfere with other elements
};

export { DragComponent, useFollowPointer };
