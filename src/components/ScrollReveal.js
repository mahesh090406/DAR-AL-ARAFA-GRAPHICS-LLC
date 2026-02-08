"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function ScrollReveal({ children, width = "fit-content", delay = 0, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 50 }, // Reduced distance for subtlety
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.0, delay: delay, ease: [0.25, 0.1, 0.25, 1.0] }} // "Buttery" smooth easing
            className={className}
            style={{ width, willChange: 'opacity, transform' }} // GPU hint
        >
            {children}
        </motion.div>
    );
}
