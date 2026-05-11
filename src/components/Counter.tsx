import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export const Counter = ({
    to,
    decimals = 0,
    duration = 2,
    delay = 0,
    suffix = "",
    prefix = "",
    className = "",
}: {
    to: number;
    decimals?: number;
    duration?: number;
    delay?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: false, margin: "-5px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;
        const controls = animate(0, to, {
            duration,
            delay,
            onUpdate(value) {
                node.textContent = value.toFixed(decimals);
            },
            ease: "easeOut",
        });
        return () => controls.stop();
    }, [to, decimals, duration, inView]);

    return (
        <span className={className}>
            {prefix}
            <span ref={nodeRef}>0</span>
            {suffix}
        </span>
    );
};
