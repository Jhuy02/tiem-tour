'use client'
import React from 'react'

interface ClipMarkRenderProps {
  id: string
  svgRef: React.RefObject<SVGSVGElement>
}

export default function ClipMarkRender({id, svgRef}: ClipMarkRenderProps) {
  const rects = Array.from({length: 30}).map((_, i) => {
    const y = (i * (1 / 30)).toFixed(4)
    const height = (1 / 30).toFixed(4)
    return (
      <rect
        key={i}
        y={y}
        width='1'
        height={height}
      />
    )
  })

  return (
    <svg
      ref={svgRef}
      width='0'
      height='0'
      style={{position: 'absolute', top: 0, left: 0}}
    >
      <clipPath
        id={id}
        clipPathUnits='objectBoundingBox'
      >
        {rects}
      </clipPath>
    </svg>
  )
}
