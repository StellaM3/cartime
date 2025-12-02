import { useState, useMemo } from 'react'
import { brands } from '../data/mockData'
import { MapMarker } from '../components/MapMarker'
import { WorldMap } from '../components/WorldMap'

type RegionKey = 'all' | 'europe' | 'asia' | 'north-america'

const COUNTRY_TO_REGION: Record<string, RegionKey> = {
  Germany: 'europe',
  Italy: 'europe',
  'Czech Republic': 'europe',
  'United Kingdom': 'europe',
  Japan: 'asia',
  USA: 'north-america',
}

const REGION_LABELS: Record<RegionKey, string> = {
  all: 'All regions',
  europe: 'Europe',
  asia: 'Asia',
  'north-america': 'North America',
}

export function MapPage() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState<RegionKey>('all')

  const availableRegions = useMemo(
    () =>
      (['all', ...Array.from(new Set(brands.map((brand) => COUNTRY_TO_REGION[brand.country])))] as RegionKey[]).filter(
        (value, index, self) => value && self.indexOf(value) === index,
      ),
    [],
  )

  const filteredBrands = useMemo(
    () =>
      brands.filter((brand) => {
        const matchesQuery =
          query.trim().length === 0 ||
          brand.name.toLowerCase().includes(query.trim().toLowerCase()) ||
          brand.country.toLowerCase().includes(query.trim().toLowerCase())

        const matchesRegion =
          region === 'all' || COUNTRY_TO_REGION[brand.country] === region

        return matchesQuery && matchesRegion
      }),
    [query, region],
  )

  return (
    <section className="map-page-shell">
      <div className="map-page-header">
        <div className="page-heading">
          <p className="eyebrow">World Atlas</p>
          <h1>Explore Car Brands</h1>
          <p className="page-summary">Click on a brand to discover its timeline and iconic models</p>
        </div>
        <div className="page-filters">
          <div className="page-search">
            <span className="page-search-icon">⌕</span>
            <input
              type="text"
              className="page-search-input"
              placeholder="Search a brand or country..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="page-region-chips">
            {availableRegions.map((key) => (
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
        <WorldMap />
        <div className="map-markers-layer">
          {filteredBrands.map((brand) => (
            <MapMarker key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
      
      <div className="map-legend">
        <p className="map-legend-title">
          <span className="legend-dot" />
          {filteredBrands.length} brand{filteredBrands.length !== 1 ? 's' : ''} displayed
        </p>
      </div>
    </section>
  )
}

