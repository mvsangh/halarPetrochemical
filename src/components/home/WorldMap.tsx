import { motion } from 'framer-motion';

interface Connection {
    start: { lat: number; lng: number; label: string };
    end: { lat: number; lng: number; label: string };
}

interface WorldMapProps {
    dots?: Connection[];
    lineColor?: string;
}

const defaultDots = [
    { id: 1, x: '20%', y: '30%', label: 'North America' },
    { id: 2, x: '25%', y: '35%', label: 'USA' },
    { id: 3, x: '48%', y: '25%', label: 'Europe' },
    { id: 4, x: '52%', y: '35%', label: 'Middle East' }, // UAE approx
    { id: 5, x: '75%', y: '30%', label: 'Asia' },
    { id: 6, x: '80%', y: '60%', label: 'Australia' },
    { id: 7, x: '50%', y: '50%', label: 'Africa' },
    { id: 8, x: '30%', y: '60%', label: 'South America' },
];

const WorldMap: React.FC<WorldMapProps> = ({ dots: connections, lineColor = '#3b82f6' }) => {
    // Use default dots for now (connections prop can be used for future enhancements)
    const dots = defaultDots;
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-primary font-semibold mb-4"
                    >
                        <div className="w-6 h-[2px] bg-primary" />
                        GLOBAL PRESENCE
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Expanding Our <span className="text-primary">Global Footprint</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        We supply premium petrochemical products to clients across continents,
                        ensuring quality and reliability in every transaction.
                    </motion.p>
                </div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="relative max-w-5xl mx-auto aspect-[16/9] bg-secondary/30 rounded-3xl border border-secondary p-4 shadow-inner"
                >
                    {/* Abstract Map Background */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-center bg-no-repeat pointer-events-none" />
                    {/* Fallback pattern if image fails or for extra style */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT/.05),transparent_70%)]" />

                    {/* Dots */}
                    {dots.map((dot, index) => (
                        <motion.div
                            key={dot.id}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.5 + index * 0.1 // Staggered delay
                            }}
                            style={{ left: dot.x, top: dot.y }}
                            className="absolute w-4 h-4"
                        >
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                            </span>
                            {/* Tooltip/Label */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                                {dot.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                    {[
                        { label: 'Countries Served', value: '25+' },
                        { label: 'Years Experience', value: '15+' },
                        { label: 'Happy Clients', value: '500+' },
                        { label: 'Products', value: '50+' },
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.value}</div>
                            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorldMap;
