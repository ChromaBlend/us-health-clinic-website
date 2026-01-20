import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

// --- Scale In Component ---
// --- Scale In Component ---
export const ScaleIn = ({ children, delay = 0, className = "", force = false }: { children: React.ReactNode, delay?: number, className?: string, force?: boolean }) => {
    const motionProps = force
        ? { animate: { scale: 1, opacity: 1 } }
        : { whileInView: { scale: 1, opacity: 1 }, viewport: { once: true } };

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            {...motionProps}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// --- Fade In Component ---
interface FadeInProps extends HTMLMotionProps<"div"> {
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    duration?: number;
    className?: string; // Explicitly adding className
    force?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    direction = 'up',
    distance = 20,
    duration = 0.5,
    className = "",
    force = false,
    ...props
}) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {}
    };

    const motionProps = force
        ? { animate: { opacity: 1, x: 0, y: 0 } }
        : { whileInView: { opacity: 1, x: 0, y: 0 }, viewport: { once: true, margin: "-50px" } };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            {...motionProps}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} // smooth ease out
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// --- Stagger Container ---
// Use this to wrap lists or grids where you want items to pop in one by one.
interface StaggerContainerProps extends HTMLMotionProps<"div"> {
    staggerDelay?: number;
    delayChildren?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
    children,
    staggerDelay = 0.1,
    delayChildren = 0,
    className = "",
    ...props
}) => {
    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delayChildren,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// --- Stagger Item ---
// Direct children of StaggerContainer should use this or simply be `motion.div` with the correct variants.
// This component makes it easier to just wrap usage.
export const StaggerItem: React.FC<HTMLMotionProps<"div">> = ({
    children,
    className = "",
    ...props
}) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <motion.div variants={itemVariants} className={className} {...props}>
            {children}
        </motion.div>
    );
};
