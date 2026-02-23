import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Local asset imports
import imgPetrochemicals from "@/assets/products/categories/petrochemicals.png";
import imgFood from "@/assets/products/categories/food_industry.png";
import imgSolvents from "@/assets/products/categories/solvents.png";
import imgMining from "@/assets/products/categories/mining.png";
import imgWater from "@/assets/products/categories/water_treatment.png";
import imgRawMaterials from "@/assets/products/categories/raw_materials.png";
import imgCosmetics from "@/assets/products/categories/cosmetics.png";
import imgTextile from "@/assets/products/categories/textile.png";
import imgPrintingInk from "@/assets/products/categories/printing_ink.png";
import imgFoam from "@/assets/products/categories/foam_industry.png";
import imgPaint from "@/assets/products/categories/paint_coatings.png";

const slides = [
    { name: "Petrochemicals", image: imgPetrochemicals },
    { name: "Food Industry Chemicals", image: imgFood },
    { name: "Solvents", image: imgSolvents },
    { name: "Mining Industry Chemicals", image: imgMining },
    { name: "Water Treatment Chemicals", image: imgWater },
    { name: "Detergent & Chemical Raw Materials", image: imgRawMaterials },
    { name: "Cosmetics & Personal Care Chemicals", image: imgCosmetics },
    { name: "Textile Industry Chemicals", image: imgTextile },
    { name: "Printing Ink Chemicals", image: imgPrintingInk },
    { name: "Foam Industry Chemicals", image: imgFoam },
    { name: "Paint & Coatings Chemicals", image: imgPaint },
];

const CARD_GAP = 20;

/** Compute responsive card width + height based on viewport */
function getCardDimensions(vw: number) {
    if (vw < 640) {
        // Mobile: show 1 card + peek at next (~85vw wide)
        return { w: Math.round(vw * 0.82), h: Math.min(Math.round(vw * 1.05), 420) };
    }
    if (vw < 1024) {
        // Tablet: ~45vw so ~2 cards visible
        return { w: Math.round(vw * 0.44), h: 480 };
    }
    // Desktop: fixed 400–450px
    return { w: 420, h: 520 };
}

const IndustriesSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLDivElement>(null);

    // Responsive card dimensions from actual viewport
    const [dims, setDims] = useState(() => getCardDimensions(
        typeof window !== "undefined" ? window.innerWidth : 1280
    ));

    useEffect(() => {
        const handle = () => setDims(getCardDimensions(window.innerWidth));
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);
    }, []);

    const { w: CARD_W, h: CARD_H } = dims;

    // Total scroll travel
    const totalTravel = slides.length * (CARD_W + CARD_GAP);
    // Keep enough so the last card is fully visible
    const endX = -(totalTravel - CARD_W - CARD_GAP * 2);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const rawX = useTransform(scrollYProgress, [0, 1], [0, endX]);

    const x = useSpring(rawX, {
        stiffness: 55,
        damping: 18,
        mass: 0.4,
        restDelta: 0.001,
    });

    const rawScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scaleX = useSpring(rawScale, { stiffness: 80, damping: 25, mass: 0.3 });

    const handleCardClick = (name: string) => {
        navigate(`/products?category=${encodeURIComponent(name)}`);
    };

    // Section height: give each card enough scroll room (slightly less on mobile)
    const sectionVh = dims.w < 640
        ? slides.length * 40   // 40vh per card on mobile
        : slides.length * 55;  // 55vh per card on desktop

    return (
        <section className="bg-gray-50">

            {/* ── Header ── */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-gray-400 font-bold mb-3 tracking-[0.2em] uppercase text-xs"
                    >
                        <div className="w-8 h-[2px] bg-red-600" />
                        GLOBAL IMPACT
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-5 tracking-tight"
                    >
                        Industries We{" "}
                        <span className="text-red-600">Serve</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-500 leading-relaxed font-medium"
                    >
                        Our premium petrochemical products power critical sectors worldwide,
                        driving innovation and operational excellence.
                    </motion.p>
                </div>
            </div>

            {/* ── Pinned horizontal scroll ── */}
            <div
                ref={sectionRef}
                style={{ height: `${sectionVh}vh` }}
                className="relative"
            >
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                    {/* Progress bar */}
                    <div className="absolute top-4 sm:top-6 left-0 right-0 px-5 sm:px-10 lg:px-16 flex items-center gap-3 z-20">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 hidden sm:block">
                            START
                        </span>
                        <div className="flex-1 h-[2px] bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-red-600 rounded-full"
                                style={{ scaleX, transformOrigin: "left" }}
                            />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 hidden sm:block">
                            END
                        </span>
                        <span className="text-[10px] font-medium text-gray-400 sm:hidden">
                            SCROLL ↓
                        </span>
                    </div>

                    {/* Card strip */}
                    <motion.div
                        className="flex will-change-transform"
                        style={{ x, gap: CARD_GAP, paddingLeft: "5vw" }}
                    >
                        {slides.map((slide, i) => (
                            <motion.div
                                key={slide.name}
                                className="flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer group/card"
                                style={{ width: CARD_W, height: CARD_H }}
                                onClick={() => handleCardClick(slide.name)}
                                whileHover={{ scale: 1.025 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            >
                                {/* Image */}
                                <img
                                    src={slide.image}
                                    alt={slide.name}
                                    draggable={false}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                />

                                {/* Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                                {/* Number badge */}
                                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                                    <span className="text-white/40 text-xs font-black tracking-widest">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Hover arrow */}
                                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 flex items-center justify-center
                                    opacity-0 group-hover/card:opacity-100 -translate-y-1 group-hover/card:translate-y-0
                                    transition-all duration-300 shadow-xl z-10">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>

                                {/* Red label bar */}
                                <div className="absolute bottom-0 inset-x-0 bg-red-600 py-3 sm:py-4 px-4 sm:px-5">
                                    <p className="text-xs sm:text-sm font-black text-white uppercase tracking-wider sm:tracking-widest leading-snug line-clamp-1">
                                        {slide.name}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Scroll hint */}
                    <div className="absolute bottom-6 left-5 sm:left-10 lg:left-16">
                        <p className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-widest uppercase">
                            ↓ Scroll to explore
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
