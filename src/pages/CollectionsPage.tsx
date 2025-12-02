import { useState, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { collectionsStore } from '../utils/collectionsStore'
import { authStore } from '../utils/authStore'

export function CollectionsPage() {
  const [collections, setCollections] = useState(collectionsStore.getAll())
  const [isCreating, setIsCreating] = useState(false)
  const [newCollectionName, setNewCollectionName] = useState('')
  const navigate = useNavigate()

  // Rediriger vers login si non connecté
  if (!authStore.isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  useEffect(() => {
    const handleUpdate = () => {
      setCollections(collectionsStore.getAll())
    }

    window.addEventListener('collections-updated', handleUpdate)
    return () => window.removeEventListener('collections-updated', handleUpdate)
  }, [])

  const handleCreateCollection = () => {
    if (newCollectionName.trim()) {
      collectionsStore.createCollection(newCollectionName.trim())
      setNewCollectionName('')
      setIsCreating(false)
      setCollections(collectionsStore.getAll())
    }
  }

  const handleDeleteCollection = (collectionId: string) => {
    if (confirm('Are you sure you want to delete this collection?')) {
      collectionsStore.deleteCollection(collectionId)
      setCollections(collectionsStore.getAll())
    }
  }

  return (
    <section className="collections-shell">
      <div className="page-heading">
        <p className="eyebrow">Personal garage</p>
        <h1>Collections</h1>
      </div>
      <div className="collections-grid">
        {collections.map((collection) => (
          <Card
            key={collection.id}
            title={collection.name}
            subtitle={`${collection.models.length} model${collection.models.length !== 1 ? 's' : ''}`}
            action={
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="ghost-button" onClick={() => navigate(`/collections/${collection.id}`)}>
                  Open
                </button>
                <button
                  className="ghost-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteCollection(collection.id)
                  }}
                  style={{ color: '#ff6b6b' }}
                >
                  Delete
                </button>
              </div>
            }
          >
            {collection.models.length > 0 ? (
              <div className="collection-preview">
                {collection.models.slice(0, 3).map((model) => (
                  <div key={model.id} className="collection-preview-item">
                    <img src={model.image} alt={model.name} />
                  </div>
                ))}
                {collection.models.length > 3 && (
                  <div className="collection-preview-more">+{collection.models.length - 3}</div>
                )}
              </div>
            ) : (
              <p className="card-note">Add a model to enrich this collection.</p>
            )}
          </Card>
        ))}
      </div>

      {isCreating ? (
        <div className="create-collection-form">
          <input
            type="text"
            className="modal-input"
            placeholder="Collection name..."
            value={newCollectionName}
            onChange={(e) => setNewCollectionName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleCreateCollection()}
            autoFocus
          />
          <div className="modal-actions">
            <button className="secondary-button" onClick={() => setIsCreating(false)}>
              Cancel
            </button>
            <button
              className="primary-button"
              onClick={handleCreateCollection}
              disabled={!newCollectionName.trim()}
            >
              Create
            </button>
          </div>
        </div>
      ) : (
        <button className="primary-button with-icon" onClick={() => setIsCreating(true)}>
          <span>+</span> Create a new collection
        </button>
      )}
    </section>
  )
}

