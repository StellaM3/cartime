import { Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { BrandTimelinePage } from './pages/BrandTimelinePage'
import { ModelDetailPage } from './pages/ModelDetailPage'
import { CollectionsPage } from './pages/CollectionsPage'
import { BlogPage } from './pages/BlogPage'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { ProfilePage } from './pages/ProfilePage'
import { AuthPage } from './pages/AuthPage'
import { BrandsPage } from './pages/BrandsPage'
import { MapPage } from './pages/MapPage'

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brands/:brandId" element={<BrandTimelinePage />} />
          <Route path="/brands/:brandId/models/:modelId" element={<ModelDetailPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:articleId" element={<BlogArticlePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/signup" element={<AuthPage mode="signup" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
