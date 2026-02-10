"use client"

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface Connection {
    start: { lat: number; lng: number; label: string };
    end: { lat: number; lng: number; label: string };
}

interface WorldMapProps {
    connections?: Connection[];
    lineColor?: string;
}

const defaultConnections: Connection[] = [
    {
        start: { lat: 40, lng: -100, label: 'USA' },
        end: { lat: 52, lng: 0, label: 'UK' }
    },
    {
        start: { lat: 52, lng: 0, label: 'UK' },
        end: { lat: 35, lng: 51, label: 'UAE' }
    },
    {
        start: { lat: 35, lng: 51, label: 'UAE' },
        end: { lat: 35, lng: 104, label: 'China' }
    },
    {
        start: { lat: -25, lng: 133, label: 'Australia' },
        end: { lat: 35, lng: 104, label: 'China' }
    },
    {
        start: { lat: -15, lng: -55, label: 'Brazil' },
        end: { lat: 10, lng: -10, label: 'Nigeria' }
    },
    {
        start: { lat: 10, lng: -10, label: 'Nigeria' },
        end: { lat: 35, lng: 51, label: 'UAE' }
    },
    {
        start: { lat: 40, lng: -3, label: 'Spain' },
        end: { lat: -34, lng: -58, label: 'Argentina' }
    },
    {
        start: { lat: 20, lng: 78, label: 'India' },
        end: { lat: -1, lng: 37, label: 'Kenya' }
    }
];

interface ConnectionPoint {
    x: number;
    y: number;
    label: string;
    connections: number;
}

export default function WorldMap({ 
    connections = defaultConnections, 
    lineColor = '#3b82f6' 
}: WorldMapProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>(0);
    const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
    const [connectionPoints, setConnectionPoints] = useState<ConnectionPoint[]>([]);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
    });

    // Responsive dimensions
    const getDimensions = () => {
        const { width } = windowSize;
        
        if (width < 640) { // Mobile
            return {
                canvasHeight: 320,
                fontSize: {
                    countryLabel: 8,
                    connectionCount: 6,
                    hoverTitle: 14,
                    hoverText: 12
                },
                pointRadius: 3,
                lineWidth: 1.5
            };
        } else if (width < 768) { // Small tablet
            return {
                canvasHeight: 380,
                fontSize: {
                    countryLabel: 9,
                    connectionCount: 7,
                    hoverTitle: 15,
                    hoverText: 13
                },
                pointRadius: 4,
                lineWidth: 1.8
            };
        } else if (width < 1024) { // Tablet
            return {
                canvasHeight: 420,
                fontSize: {
                    countryLabel: 10,
                    connectionCount: 8,
                    hoverTitle: 16,
                    hoverText: 14
                },
                pointRadius: 4.5,
                lineWidth: 2
            };
        } else { // Desktop
            return {
                canvasHeight: 500,
                fontSize: {
                    countryLabel: 11,
                    connectionCount: 8,
                    hoverTitle: 18,
                    hoverText: 14
                },
                pointRadius: 5,
                lineWidth: 2.5
            };
        }
    };

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Helper function to convert lat/lng to screen coordinates
    const latLngToCoords = (lat: number, lng: number, projection: d3.GeoProjection) => {
        const coords = projection([lng, lat]);
        return coords ? { x: coords[0], y: coords[1] } : null;
    };

    // Draw an arc between two points with animation
    const drawArc = (
        ctx: CanvasRenderingContext2D,
        start: { lat: number; lng: number; label: string },
        end: { lat: number; lng: number; label: string },
        projection: d3.GeoProjection,
        lineColor: string,
        animationProgress: number
    ) => {
        const { lineWidth } = getDimensions();
        const startCoords = latLngToCoords(start.lat, start.lng, projection);
        const endCoords = latLngToCoords(end.lat, end.lng, projection);
        
        if (!startCoords || !endCoords) return;
        
        // Create a great circle interpolation
        const interpolate = d3.geoInterpolate(
            [start.lng, start.lat],
            [end.lng, end.lat]
        );
        
        // Calculate animation offset
        const animOffset = (animationProgress * 2) % 1;
        
        // Draw the base arc
        ctx.beginPath();
        const steps = Math.min(50, windowSize.width < 768 ? 30 : 50); // Reduce steps on mobile
        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const [lng, lat] = interpolate(t);
            const point = projection([lng, lat]);
            if (point) {
                if (i === 0) ctx.moveTo(point[0], point[1]);
                else ctx.lineTo(point[0], point[1]);
            }
        }
        
        // Draw base line
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctx.globalAlpha = 0.4;
        ctx.stroke();
        
        // Draw animated line segment
        const animStart = Math.max(0, animOffset - 0.2);
        const animEnd = animOffset;
        
        if (animEnd > animStart) {
            ctx.beginPath();
            const animSteps = Math.floor((animEnd - animStart) * steps);
            for (let i = 0; i <= animSteps; i++) {
                const t = animStart + (i / animSteps) * (animEnd - animStart);
                const [lng, lat] = interpolate(t);
                const point = projection([lng, lat]);
                if (point) {
                    if (i === 0) ctx.moveTo(point[0], point[1]);
                    else ctx.lineTo(point[0], point[1]);
                }
            }
            
            // Animated line segment
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = lineWidth + 1;
            ctx.globalAlpha = 1;
            ctx.stroke();
            
            // Add glow to animated segment
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth + 2;
            ctx.globalAlpha = 0.8;
            ctx.stroke();
        }
        
        ctx.globalAlpha = 1;
    };

    // Draw connection points with labels
    const drawConnectionPoints = (
        ctx: CanvasRenderingContext2D,
        projection: d3.GeoProjection,
        animationProgress: number
    ) => {
        const { fontSize, pointRadius } = getDimensions();
        const points: ConnectionPoint[] = [];
        
        // Collect all unique points with their connection counts
        const pointMap = new Map<string, { coords: { x: number; y: number }, label: string, connections: number }>();
        
        connections.forEach(conn => {
            const startCoords = latLngToCoords(conn.start.lat, conn.start.lng, projection);
            const endCoords = latLngToCoords(conn.end.lat, conn.end.lng, projection);
            
            if (startCoords) {
                const key = `${conn.start.lat},${conn.start.lng}`;
                const existing = pointMap.get(key) || { 
                    coords: startCoords, 
                    label: conn.start.label, 
                    connections: 0 
                };
                existing.connections++;
                pointMap.set(key, existing);
            }
            
            if (endCoords) {
                const key = `${conn.end.lat},${conn.end.lng}`;
                const existing = pointMap.get(key) || { 
                    coords: endCoords, 
                    label: conn.end.label, 
                    connections: 0 
                };
                existing.connections++;
                pointMap.set(key, existing);
            }
        });
        
        // Draw each point
        pointMap.forEach((point) => {
            const isHovered = hoveredPoint === point.label;
            const pulse = Math.sin(Date.now() * 0.005) * 0.5 + 0.5;
            const scaleFactor = windowSize.width < 768 ? 0.8 : 1;
            
            // Draw connection lines from point
            ctx.beginPath();
            ctx.arc(point.coords.x, point.coords.y, (10 + point.connections * 2) * scaleFactor, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${0.1 + pulse * 0.1})`;
            ctx.fill();
            
            // Outer ring
            ctx.beginPath();
            ctx.arc(point.coords.x, point.coords.y, (6 + point.connections) * scaleFactor, 0, Math.PI * 2);
            ctx.fillStyle = isHovered ? '#ffffff' : lineColor;
            ctx.fill();
            
            // Inner dot
            ctx.beginPath();
            ctx.arc(point.coords.x, point.coords.y, pointRadius * scaleFactor, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            
            // Connection count badge
            if (point.connections > 1) {
                const badgeSize = 6 * scaleFactor;
                ctx.beginPath();
                ctx.arc(point.coords.x + badgeSize, point.coords.y - badgeSize, badgeSize, 0, Math.PI * 2);
                ctx.fillStyle = '#ef4444';
                ctx.fill();
                
                ctx.fillStyle = '#ffffff';
                ctx.font = `bold ${fontSize.connectionCount}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(point.connections.toString(), point.coords.x + badgeSize, point.coords.y - badgeSize);
            }
            
            // Country label - only show on desktop or when hovered on mobile
            const shouldShowLabel = windowSize.width >= 768 || isHovered;
            if (shouldShowLabel) {
                ctx.fillStyle = isHovered ? '#ffffff' : '#d1d5db';
                ctx.font = isHovered ? `bold ${fontSize.countryLabel + 1}px Arial` : `${fontSize.countryLabel}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(point.label, point.coords.x, point.coords.y + 15 * scaleFactor);
            }
            
            points.push({
                x: point.coords.x,
                y: point.coords.y,
                label: point.label,
                connections: point.connections
            });
        });
        
        setConnectionPoints(points);
        return points;
    };

    // Check if point is hovered
    const checkHover = (mouseX: number, mouseY: number, points: ConnectionPoint[]) => {
        const tolerance = windowSize.width < 768 ? 20 : 15; // Larger touch target on mobile
        for (const point of points) {
            const distance = Math.sqrt(
                Math.pow(mouseX - point.x, 2) + Math.pow(mouseY - point.y, 2)
            );
            if (distance < tolerance) {
                return point.label;
            }
        }
        return null;
    };

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const width = canvas.offsetWidth
        const { canvasHeight } = getDimensions()
        const height = canvasHeight
        const radius = Math.min(width, height) / (windowSize.width < 768 ? 2 : 2.3)

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
        let rotation: [number, number, number] = [0, -15, 0]
        let isAutoRotating = true
        const rotationSpeed = windowSize.width < 768 ? 0.04 : 0.08 // Slower on mobile
        let animationProgress = 0

        const draw = () => {
            ctx.clearRect(0, 0, width, height)

            // 🌊 Ocean with gradient
            const gradient = ctx.createRadialGradient(
                width / 2, height / 2, radius * 0.3,
                width / 2, height / 2, radius
            );
            gradient.addColorStop(0, '#0f172a');
            gradient.addColorStop(1, '#020617');
            
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, projection.scale(), 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // 🌐 Border
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, projection.scale(), 0, Math.PI * 2);
            ctx.strokeStyle = '#1e40af';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            if (!land) return

            // 🌍 Grid - only show on larger screens
            if (windowSize.width >= 768) {
                ctx.globalAlpha = 0.2;
                ctx.beginPath();
                path(d3.geoGraticule10());
                ctx.strokeStyle = '#60a5fa';
                ctx.lineWidth = 0.5;
                ctx.stroke();
                ctx.globalAlpha = 1;
            }

            // 🌎 Land with gradient
            ctx.beginPath();
            land.features.forEach((f: any) => path(f));
            const landGradient = ctx.createLinearGradient(0, 0, width, height);
            landGradient.addColorStop(0, '#1e293b');
            landGradient.addColorStop(1, '#334155');
            ctx.fillStyle = landGradient;
            ctx.fill();
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = windowSize.width < 768 ? 0.5 : 0.8;
            ctx.stroke();

            // Draw connection lines
            connections.forEach(connection => {
                drawArc(ctx, connection.start, connection.end, projection, lineColor, animationProgress);
            });

            // Draw connection points and get their positions
            const points = drawConnectionPoints(ctx, projection, animationProgress);

            // Handle mouse hover
            canvas.onmousemove = (e) => {
                const rect = canvas.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                const hovered = checkHover(mouseX, mouseY, points);
                setHoveredPoint(hovered);
            };

            canvas.onmouseleave = () => {
                setHoveredPoint(null);
            };

            // Handle touch events for mobile
            canvas.ontouchstart = (e) => {
                e.preventDefault();
                const rect = canvas.getBoundingClientRect();
                const touch = e.touches[0];
                const touchX = touch.clientX - rect.left;
                const touchY = touch.clientY - rect.top;
                const hovered = checkHover(touchX, touchY, points);
                setHoveredPoint(hovered);
            };

            canvas.ontouchmove = (e) => {
                e.preventDefault();
                const rect = canvas.getBoundingClientRect();
                const touch = e.touches[0];
                const touchX = touch.clientX - rect.left;
                const touchY = touch.clientY - rect.top;
                const hovered = checkHover(touchX, touchY, points);
                setHoveredPoint(hovered);
            };

            canvas.ontouchend = () => {
                setTimeout(() => setHoveredPoint(null), 2000); // Keep info for 2 seconds
            };

            animationProgress += 0.01;
            if (animationProgress > 1) animationProgress = 0;
        }

        fetch(
            "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/physical/ne_110m_land.json"
        )
            .then(res => res.json())
            .then(data => {
                land = data
                draw()
            })
            .catch(() => {
                // Fallback if fetch fails
                console.log('Using fallback map data');
                land = { features: [] };
                draw();
            })

        // Animation loop
        const animate = () => {
            if (isAutoRotating) {
                rotation[0] += rotationSpeed;
                projection.rotate(rotation);
                draw();
            } else {
                draw();
            }
            animationRef.current = requestAnimationFrame(animate);
        }
        
        animate();

        let lastX = 0;
        let lastY = 0;
        const sensitivity = windowSize.width < 768 ? 0.5 : 0.3; // More sensitive on mobile
        
        // Drag interaction
        const drag = d3.drag<HTMLCanvasElement, unknown>()
            .on("start", (event) => {
                isAutoRotating = false;
                lastX = event.x;
                lastY = event.y;
                canvas.style.cursor = 'grabbing';
            })
            .on("drag", (event) => {
                const dx = event.x - lastX;
                const dy = event.y - lastY;

                rotation[0] += dx * sensitivity;
                rotation[1] -= dy * sensitivity;
                rotation[1] = Math.max(-90, Math.min(90, rotation[1]));

                projection.rotate(rotation);
                draw();

                lastX = event.x;
                lastY = event.y;
            })
            .on("end", () => {
                canvas.style.cursor = 'grab';
                setTimeout(() => {
                    isAutoRotating = true;
                }, 3000);
            });

        d3.select(canvas).call(drag);

        // Mouse wheel for zoom
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.95 : 1.05;
            const minScale = windowSize.width < 768 ? radius * 0.7 : radius * 0.5;
            const maxScale = windowSize.width < 768 ? radius * 1.5 : radius * 2;
            projection.scale(Math.max(minScale, Math.min(maxScale, projection.scale() * delta)));
            draw();
        };

        canvas.addEventListener('wheel', handleWheel);

        const handleResize = () => {
            if (canvas) {
                const newWidth = canvas.offsetWidth;
                projection.translate([newWidth / 2, getDimensions().canvasHeight / 2]);
                draw();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('wheel', handleWheel);
        }
    }, [connections, lineColor, hoveredPoint, windowSize])

    // Get unique countries from connections
    const getAllCountries = () => {
        const countries = new Set<string>();
        connections.forEach(conn => {
            countries.add(conn.start.label);
            countries.add(conn.end.label);
        });
        return Array.from(countries);
    };

    const countries = getAllCountries();
    const { fontSize } = getDimensions();

    return (
        <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-background to-gray-900 overflow-hidden">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1 sm:gap-2 text-primary font-semibold mb-3 md:mb-4"
                    >
                        <div className="w-6 sm:w-8 h-[2px] bg-primary" />
                        <span className="text-xs sm:text-sm tracking-widest">GLOBAL NETWORK MAP</span>
                        <div className="w-6 sm:w-8 h-[2px] bg-primary" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 px-2"
                    >
                        Worldwide <span className="text-primary">Connections</span> Network
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl md:max-w-3xl mx-auto px-3"
                    >
                        Interactive visualization of our global supply chain network connecting 
                        major markets and distribution hubs worldwide with real-time logistics tracking.
                    </motion.p>
                </div>

                {/* Main Map Container */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 shadow-xl lg:shadow-2xl border border-gray-800">
                    {/* Interactive Globe */}
                    <div className="relative">
                        <canvas
                            ref={canvasRef}
                            className="w-full rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg cursor-grab active:cursor-grabbing touch-none"
                            style={{ minHeight: getDimensions().canvasHeight }}
                        />
                        
                        {/* Hover Info Panel */}
                        {hoveredPoint && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`absolute ${
                                    windowSize.width < 768 
                                        ? 'inset-x-4 top-4 mx-auto max-w-[90%]' 
                                        : 'top-4 right-4'
                                } bg-black/90 backdrop-blur-lg rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700 shadow-2xl max-w-xs z-10`}
                            >
                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse" />
                                    <h3 className="text-white font-bold text-sm sm:text-base md:text-lg" style={{ fontSize: `${fontSize.hoverTitle}px` }}>
                                        {hoveredPoint}
                                    </h3>
                                </div>
                                <div className="space-y-1 sm:space-y-2 max-h-32 sm:max-h-40 overflow-y-auto pr-2">
                                    {connections
                                        .filter(conn => 
                                            conn.start.label === hoveredPoint || 
                                            conn.end.label === hoveredPoint
                                        )
                                        .map((conn, idx) => (
                                            <div key={idx} className="flex items-center gap-2 sm:gap-3">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full flex-shrink-0" />
                                                <span className="text-xs sm:text-sm text-gray-300 truncate" style={{ fontSize: `${fontSize.hoverText}px` }}>
                                                    {conn.start.label === hoveredPoint ? '→' : '←'} 
                                                    <span className="font-medium ml-1 sm:ml-2">
                                                        {conn.start.label === hoveredPoint ? conn.end.label : conn.start.label}
                                                    </span>
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Mobile Instructions */}
                        {windowSize.width < 768 && (
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-700">
                                <p className="text-xs text-gray-300 text-center">
                                    👆 Tap points | 🤏 Pinch to zoom | 👆 Drag to rotate
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Legend - Responsive */}
                    <div className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                        <div className="flex items-center gap-1 sm:gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
                            <span className="text-xs sm:text-sm text-gray-300">Connection Hub</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <div className="w-3 h-[1px] sm:w-4 sm:h-[2px] bg-blue-400"></div>
                            <span className="text-xs sm:text-sm text-gray-300">Active Route</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                            <span className="text-xs sm:text-sm text-gray-300">Connection Count</span>
                        </div>
                    </div>
                </div>

                {/* Network Statistics - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-800/30"
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 md:mb-2">
                            {connections.length * 2}+
                        </div>
                        <div className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Active Routes</div>
                        <div className="text-xs sm:text-sm text-blue-300">Real-time global connections</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-emerald-900/30 to-emerald-950/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-emerald-800/30"
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-1 md:mb-2">
                            {countries.length}
                        </div>
                        <div className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Countries Covered</div>
                        <div className="text-xs sm:text-sm text-emerald-300">Global network presence</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-purple-800/30 sm:col-span-2 lg:col-span-1"
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">
                            {Math.max(...connectionPoints.map(p => p.connections), 0)}
                        </div>
                        <div className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Max Connections</div>
                        <div className="text-xs sm:text-sm text-purple-300">Key distribution hubs</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}