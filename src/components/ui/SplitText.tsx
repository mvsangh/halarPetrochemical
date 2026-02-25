import { motion } from "framer-motion";

interface SplitTextProps {
    text: string;
    className?: string;
    isActive?: boolean;
    delay?: number;
}

const SplitText = ({ text, className = "", isActive = false, delay = 0 }: SplitTextProps) => {
    return (
        <span className={`inline-flex flex-wrap overflow-hidden ${className}`}>
            {text.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-flex whitespace-nowrap mr-[0.25em] last:mr-0">
                    {word.split("").map((char, charIdx) => (
                        <motion.span
                            key={charIdx}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{
                                delay: delay + (wordIdx * word.length + charIdx) * 0.015,
                                duration: 0.6,
                                ease: [0.215, 0.61, 0.355, 1],
                            }}
                            className={`inline-block ${isActive ? "text-primary" : ""}`}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </span>
    );
};

export default SplitText;
