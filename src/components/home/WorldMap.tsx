"use client"

import { motion } from 'framer-motion';
import { useEffect, useRef } from "react"
import * as d3 from "d3"

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
    { id: 4, x: '52%', y: '35%', label: 'Middle East' },
    { id: 5, x: '75%', y: '30%', label: 'Asia' },
    { id: 6, x: '80%', y: '60%', label: 'Australia' },
    { id: 7, x: '50%', y: '50%', label: 'Africa' },
    { id: 8, x: '30%', y: '60%', label: 'South America' },
];

export default function WorldMap({ dots: connections, lineColor = '#3b82f6' }: WorldMapProps) {
    const dots = defaultDots;
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const width = canvas.offsetWidth
        const height = 420
        const radius = height / 2.1

        const dpr = window.devicePixelRatio || 1
        canvas.width = width * dpr
        canvas.height = height * dpr
        canvas.style.height = `${height}px`
        ctx.scale(dpr, dpr)

        const projection = d3
            .geoOrthographic()
            .scale(radius)
            .translate([width / 2, height / 2])
            .clipAngle(90)

        const path = d3.geoPath(projection).context(ctx)

        let land: any

        // ✅ FIX: explicit tuple (3 values)
        let rotation: [number, number, number] = [0, -15, 0]
        
        // ADDED: Auto-rotation flag
        let isAutoRotating = true
        let rotationSpeed = 0.1 // Speed of auto-rotation

        const draw = () => {
            ctx.clearRect(0, 0, width, height)

            // 🌊 Ocean
            ctx.beginPath()
            ctx.arc(width / 2, height / 2, projection.scale(), 0, Math.PI * 2)
            ctx.fillStyle = "#020617"
            ctx.fill()

            // 🌐 Border glow
            ctx.strokeStyle = "#38bdf8"
            ctx.lineWidth = 2
            ctx.stroke()

            if (!land) return

            // 🌍 Grid
            ctx.globalAlpha = 0.15
            ctx.beginPath()
            path(d3.geoGraticule10())
            ctx.strokeStyle = "#ffffff"
            ctx.stroke()
            ctx.globalAlpha = 1

            // 🌎 Land
            ctx.beginPath()
            land.features.forEach((f: any) => path(f))
            ctx.strokeStyle = "#60a5fa"
            ctx.lineWidth = 0.8
            ctx.stroke()
        }

        fetch(
            "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/physical/ne_110m_land.json"
        )
            .then(res => res.json())
            .then(data => {
                land = data
                draw()
            })

        let lastX = 0
        let lastY = 0
        const sensitivity = 0.25 // adjust feel (0.2–0.4)
        
        // ADDED: Animation timer for auto-rotation
        const timer = d3.timer(() => {
            if (isAutoRotating) {
                rotation[0] += rotationSpeed
                projection.rotate(rotation)
                draw()
            }
        })

        d3.select(canvas)
            .call(
                d3.drag<HTMLCanvasElement, unknown>()
                    .on("start", (event) => {
                        // ADDED: Stop auto-rotation when dragging starts
                        isAutoRotating = false
                        lastX = event.x
                        lastY = event.y
                    })
                    .on("drag", (event) => {
                        const dx = event.x - lastX
                        const dy = event.y - lastY

                        rotation[0] += dx * sensitivity      // left ↔ right
                        rotation[1] -= dy * sensitivity      // up ↕ down

                        rotation[1] = Math.max(-90, Math.min(90, rotation[1]))

                        projection.rotate(rotation)
                        draw()

                        lastX = event.x
                        lastY = event.y
                    })
                    .on("end", () => {
                        // ADDED: Resume auto-rotation after 3 seconds of no dragging
                        setTimeout(() => {
                            isAutoRotating = true
                        }, 3000)
                    })
            )

        return () => {
            timer.stop()
        }
    }, [])

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

                {/* Rotating Earth Canvas */}
                <div className="relative w-full">
                    <canvas
                        ref={canvasRef}
                        className="w-full rounded-2xl shadow-2xl  cursor-grab active:cursor-grabbing"
                    />
              
                </div>

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
}