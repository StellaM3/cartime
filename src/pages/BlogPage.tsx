import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

type BlogFilter = 'all' | 'most-recent' | 'by-brand'

export function BlogPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<BlogFilter>('all')

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts]

    // Filtrage par recherche
    if (query.trim().length > 0) {
      const searchLower = query.trim().toLowerCase()
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower),
      )
    }

    // Filtrage par type
    if (filter === 'most-recent') {
      // Pour l'instant, on garde l'ordre original (on pourrait trier par date si on avait des dates)
      posts = posts
    } else if (filter === 'by-brand') {
      // Filtrer les posts qui mentionnent une marque dans le titre
      posts = posts.filter((post) => {
        const titleLower = post.title.toLowerCase()
        return (
          titleLower.includes('toyota') ||
          titleLower.includes('bmw') ||
          titleLower.includes('ferrari') ||
          titleLower.includes('mercedes') ||
          titleLower.includes('porsche') ||
          titleLower.includes('ford') ||
          titleLower.includes('chevrolet')
        )
      })
    }

    return posts
  }, [query, filter])

  return (
    <section className="blog-shell">
      <div className="page-heading">
        <p className="eyebrow">Stories & analysis</p>
        <h1>Blog</h1>
        <div className="page-filters">
          <div className="page-search">
            <span className="page-search-icon">⌕</span>
            <input
              type="text"
              className="page-search-input"
              placeholder="Rechercher un article…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="page-region-chips">
            <button
              type="button"
              className={`page-region-chip ${filter === 'all' ? 'is-active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`page-region-chip ${filter === 'most-recent' ? 'is-active' : ''}`}
              onClick={() => setFilter('most-recent')}
            >
              Most recent
            </button>
            <button
              type="button"
              className={`page-region-chip ${filter === 'by-brand' ? 'is-active' : ''}`}
              onClick={() => setFilter('by-brand')}
            >
              By brand
            </button>
          </div>
        </div>
      </div>
      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <article className="blog-card" key={post.id}>
            <div className="blog-card-media">
              <img src={post.image} alt="" />
            </div>
            <div className="blog-card-body">
              <p className="blog-meta">{post.readTime}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="ghost-button">
                Read
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

