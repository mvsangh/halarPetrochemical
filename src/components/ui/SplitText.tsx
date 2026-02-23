import { motion } from "framer-motion";

interface SplitTextProps {
    text: string;
    className?: string;
    isActive?: boolean;
    delay?: number;
}

const SplitText = ({ text, className = "", isActive = false, delay = 0 }: SplitTextProps) => {
    return (
        <span className={`flex flex-wrap overflow-hidden ${className}`}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                        delay: delay + i * 0.015,
                        duration: 0.6,
                        ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className={`inline-block ${char === " " ? "mr-[0.25em]" : ""} ${isActive ? "text-red-600" : ""}`}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};

export default SplitText;
