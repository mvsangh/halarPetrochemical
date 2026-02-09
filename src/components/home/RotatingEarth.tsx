"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

export default function RotatingEarth() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.offsetWidth
    const height = 420
    const radius = height / 2.2

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    // 🌍 Projection
    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([width / 2, height / 2])
      .clipAngle(90)

    const path = d3.geoPath(projection).context(ctx)

    let land: any
    let rotation: [number, number, number] = [0, -20, 0]

    // 🫧 Smoke background
    const drawSmoke = () => {
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        radius * 0.3,
        width / 2,
        height / 2,
        radius * 1.2
      )

      gradient.addColorStop(0, "rgba(255,255,255,0.9)")
      gradient.addColorStop(1, "rgba(255,255,255,0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // 🤍 White background
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, width, height)

      // 🫧 Smoke
      drawSmoke()

      // 🌐 Earth base
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, projection.scale(), 0, Math.PI * 2)
      ctx.fillStyle = "#f9fafb"
      ctx.fill()
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = 1.2
      ctx.stroke()

      if (!land) return

      // 🗺️ World map outline (BLACK)
      ctx.beginPath()
      land.features.forEach((f: any) => path(f))
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = 0.6
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

    // 🔄 Auto rotate
    d3.timer(() => {
      rotation[0] += 0.12
      projection.rotate(rotation)
      draw()
    })

    // 🖱️ Drag to move Earth
    let lastX = 0
    canvas.onmousedown = e => {
      lastX = e.clientX
      window.onmousemove = ev => {
        const dx = ev.clientX - lastX
        rotation[0] += dx * 0.2
        lastX = ev.clientX
        projection.rotate(rotation)
        draw()
      }
      window.onmouseup = () => {
        window.onmousemove = null
      }
    }
  }, [])

  return (
    <div className="relative w-full flex justify-center">
      <canvas
        ref={canvasRef}
        className="w-full max-w-md cursor-grab"
      />
    </div>
  )
}
