import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { brands } from '../data/mockData'

type RegionKey = 'all' | 'europe' | 'asia' | 'north-america'

const REGION_LABELS: Record<RegionKey, string> = {
  all: 'Toutes les régions',
  europe: 'Europe',
  asia: 'Asie',
  'north-america': 'Amérique du Nord',
}

// Map countries to regions
const getRegion = (country: string): RegionKey => {
  const europeCountries = ['Germany', 'Italy', 'United Kingdom', 'Czech Republic']
  const asiaCountries = ['Japan']
  const northAmericaCountries = ['USA']

  if (europeCountries.includes(country)) return 'europe'
  if (asiaCountries.includes(country)) return 'asia'
  if (northAmericaCountries.includes(country)) return 'north-america'
  return 'europe' // default
}

// Convert lat/lng to x/y percentage on SVG viewBox (1000x500)
const latLngToSvgPosition = (lat: number, lng: number) => {
  // Map longitude from -180 to 180 -> 0 to 1000
  const x = ((lng + 180) / 360) * 1000
  // Map latitude from 90 to -90 -> 0 to 500 (inverted)
  const y = ((90 - lat) / 180) * 500
  return { x, y }
}

export function MapPage() {
  const navigate = useNavigate()
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)
  const [region, setRegion] = useState<RegionKey>('all')

  const filteredBrands = useMemo(() => {
    if (region === 'all') return brands
    return brands.filter((brand) => getRegion(brand.country) === region)
  }, [region])

  return (
    <section className="map-page-shell">
      <div className="page-heading">
        <p className="eyebrow">World Atlas</p>
        <h1>Explore Car Brands</h1>
        <p className="page-summary">
          Click on a brand to discover its timeline and iconic models
        </p>
        <div className="page-filters">
          <div className="page-region-chips">
            {(Object.keys(REGION_LABELS) as RegionKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className={`page-region-chip ${region === key ? 'is-active' : ''}`}
                onClick={() => setRegion(key)}
              >
                {REGION_LABELS[key]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="map-container">
        {/* World Map SVG with brand markers inside */}
        <svg
          viewBox="0 0 1000 500"
          className="world-map-svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Ocean background - Dark Blue */}
          <rect x="0" y="0" width="1000" height="500" fill="#0a1628" />
          
          {/* Simplified world continents - Black land masses */}
          <g fill="#050608" stroke="#7ec8e3" strokeWidth="0.5" strokeOpacity="0.3">
            {/* North America - positioned around lng -100, lat 40-60 */}
            <path d="M 80 60 Q 120 40 180 50 L 250 70 Q 290 90 300 130 L 290 180 Q 270 220 230 240 L 180 250 Q 130 240 100 210 L 70 160 Q 50 110 80 60 Z" />
            {/* Mexico & Central America */}
            <path d="M 130 240 Q 170 235 200 260 L 220 300 Q 200 330 160 320 L 130 290 Q 110 260 130 240 Z" />
            
            {/* South America */}
            <path d="M 220 320 Q 270 310 300 350 L 320 420 Q 300 470 260 480 L 210 470 Q 180 430 200 370 L 220 320 Z" />
            
            {/* Europe - positioned around lng 0-30, lat 45-60 */}
            <path d="M 460 70 Q 500 60 550 70 L 590 90 Q 620 110 610 150 L 580 180 Q 540 190 490 180 L 450 150 Q 430 110 460 70 Z" />
            {/* UK */}
            <path d="M 455 85 Q 470 80 478 95 L 476 115 Q 468 125 455 120 L 448 100 Q 448 88 455 85 Z" />
            {/* Scandinavia */}
            <path d="M 510 40 Q 540 30 560 50 L 570 80 Q 555 100 530 95 L 510 70 Q 500 50 510 40 Z" />
            
            {/* Africa */}
            <path d="M 480 200 Q 530 190 570 210 L 610 270 Q 630 350 600 420 L 550 460 Q 490 470 460 440 L 440 370 Q 430 280 480 200 Z" />
            
            {/* Asia - positioned around lng 80-140, lat 30-60 */}
            <path d="M 600 50 Q 700 40 800 60 L 880 100 Q 920 140 910 200 L 880 260 Q 820 290 740 280 L 660 250 Q 600 200 590 130 L 600 50 Z" />
            {/* India */}
            <path d="M 680 260 Q 720 250 750 280 L 770 340 Q 750 390 700 380 L 660 340 Q 650 290 680 260 Z" />
            {/* Southeast Asia */}
            <path d="M 780 280 Q 820 270 850 300 L 870 350 Q 850 400 800 390 L 760 350 Q 750 310 780 280 Z" />
            
            {/* Japan - positioned around lng 138, lat 36 */}
            <path d="M 905 120 Q 925 110 940 130 L 950 170 Q 940 210 915 200 L 895 160 Q 890 130 905 120 Z" />
            
            {/* Australia */}
            <path d="M 820 370 Q 880 360 920 400 L 940 450 Q 920 490 860 495 L 800 480 Q 760 440 780 400 L 820 370 Z" />
          </g>

          {/* Grid lines */}
          <g stroke="#7ec8e3" strokeWidth="0.3" strokeOpacity="0.08">
            <line x1="0" y1="125" x2="1000" y2="125" />
            <line x1="0" y1="250" x2="1000" y2="250" />
            <line x1="0" y1="375" x2="1000" y2="375" />
            <line x1="250" y1="0" x2="250" y2="500" />
            <line x1="500" y1="0" x2="500" y2="500" />
            <line x1="750" y1="0" x2="750" y2="500" />
          </g>

          {/* Brand markers rendered inside SVG */}
          {filteredBrands.map((brand) => {
            const pos = latLngToSvgPosition(brand.location.lat, brand.location.lng)
            const isHovered = hoveredBrand === brand.id

            return (
              <g
                key={brand.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                className="map-brand-marker-svg"
                onClick={() => navigate(`/brands/${brand.id}`)}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Pulse ring */}
                <circle
                  r="18"
                  fill="none"
                  stroke="#7ec8e3"
                  strokeWidth="2"
                  opacity="0.4"
                  className="marker-pulse-svg"
                />
                {/* Main dot */}
                <circle
                  r={isHovered ? 14 : 12}
                  fill="#050608"
                  stroke="#7ec8e3"
                  strokeWidth="2"
                  style={{ transition: 'r 0.2s ease' }}
                />
                {/* Brand logo as image */}
                <image
                  href={brand.logo}
                  x="-8"
                  y="-8"
                  width="16"
                  height="16"
                  clipPath="circle(8px)"
                  style={{ borderRadius: '50%' }}
                />
                {/* Tooltip on hover */}
                {isHovered && (
                  <g transform="translate(0, 25)">
                    <rect
                      x="-50"
                      y="0"
                      width="100"
                      height="36"
                      rx="6"
                      fill="rgba(5, 6, 8, 0.95)"
                      stroke="#7ec8e3"
                      strokeWidth="1"
                      strokeOpacity="0.5"
                    />
                    <text
                      x="0"
                      y="14"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="600"
                    >
                      {brand.name}
                    </text>
                    <text
                      x="0"
                      y="28"
                      textAnchor="middle"
                      fill="#7ec8e3"
                      fontSize="8"
                    >
                      {brand.regionLabel}
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      <div className="map-legend">
        <div className="map-legend-item">
          <span className="legend-dot" />
          <span>
            {filteredBrands.length} marque{filteredBrands.length > 1 ? 's' : ''} affichée{filteredBrands.length > 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </section>
  )
}
