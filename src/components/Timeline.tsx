import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Brand } from '../data/mockData'
import { ModelTooltip } from './ModelTooltip'

type TimelineProps = {
  brand: Brand
}

export function Timeline({ brand }: TimelineProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const navigate = useNavigate()

  const ticks = useMemo(() => {
    const step = 5
    const values = []
    for (let year = brand.timelineStart; year <= brand.timelineEnd; year += step) {
      values.push(year)
    }
    return values
  }, [brand.timelineEnd, brand.timelineStart])

  // Calculer les positions des ticks avec espacement régulier et sans chevauchement
  const tickPositions = useMemo(() => {
    const positions: Array<{ year: number; left: string }> = []
    const totalTicks = ticks.length
    
    if (totalTicks === 0) return positions
    
    // Calculer l'espacement régulier en pourcentage
    // On réserve environ 3% à droite pour la flèche
    const availableWidth = 97
    const spacing = totalTicks > 1 ? availableWidth / (totalTicks - 1) : 0
    
    ticks.forEach((tick, index) => {
      let left: string
      if (index === totalTicks - 1) {
        // Dernier tick : avant la flèche (environ 97% de la largeur)
        left = `${availableWidth}%`
      } else {
        // Ticks régulièrement espacés
        left = `${index * spacing}%`
      }
      positions.push({ year: tick, left })
    })
    
    return positions
  }, [ticks])

  const getPosition = (year: number) => {
    const range = brand.timelineEnd - brand.timelineStart
    const ratio = (year - brand.timelineStart) / range
    // Décaler les modèles récents (i8 et M4 CSL) plus à gauche
    let adjustedRatio = ratio
    if (year >= 2014) {
      adjustedRatio = ratio * 0.85 // Décaler de 15% vers la gauche
    }
    return `${adjustedRatio * 100}%`
  }

  // Calculer les positions avec décalage vertical pour éviter les chevauchements
  const modelPositions = useMemo(() => {
    const sortedModels = [...brand.models].sort((a, b) => a.year - b.year)
    const positions: Array<{ model: typeof sortedModels[0]; left: string; top: string }> = []

    sortedModels.forEach((model, index) => {
      const left = getPosition(model.year)
      
      // Vérifier les chevauchements avec les modèles précédents
      let topOffset = 0
      for (let i = 0; i < index; i++) {
        const prevModel = sortedModels[i]
        const prevLeft = parseFloat(getPosition(prevModel.year).replace('%', ''))
        const currentLeft = parseFloat(left.replace('%', ''))
        const distance = Math.abs(currentLeft - prevLeft)
        
        // Si les modèles sont trop proches (moins de 11% d'écart), on décale verticalement
        if (distance < 11) {
          const prevTop = positions[i].top ? parseFloat(positions[i].top.replace('px', '')) : 0
          topOffset = Math.max(topOffset, prevTop + 110)
        }
      }
      
      positions.push({
        model,
        left,
        top: topOffset > 0 ? `${topOffset}px` : '0px',
      })
    })

    return positions
  }, [brand.models, brand.timelineStart, brand.timelineEnd])

  return (
    <section className="timeline-shell">
      <div className="timeline-axis">
        {tickPositions.map(({ year, left }) => (
          <div key={year} className="timeline-tick" style={{ left }}>
            <span className="tick-mark" />
            <span className="tick-label">{year}</span>
          </div>
        ))}
        <span className="timeline-arrow" aria-hidden="true" />
      </div>
      <div className="timeline-model-layer">
        {modelPositions.map(({ model, left, top }) => (
          <div
            key={model.id}
            className="timeline-car"
            style={{ left, top }}
            onMouseEnter={() => setHoveredId(model.id)}
            onMouseLeave={() => setHoveredId((current) => (current === model.id ? null : current))}
          >
            <button
              className="car-icon"
              onClick={() => navigate(`/brands/${brand.id}/models/${model.id}`)}
              aria-label={`Afficher ${model.name}`}
            >
              <img
                src={model.heroImage}
                alt={model.name}
                className="car-image"
                loading="lazy"
              />
            </button>
            {hoveredId === model.id && <ModelTooltip name={model.name} year={model.year} />}
          </div>
        ))}
      </div>
    </section>
  )
}

