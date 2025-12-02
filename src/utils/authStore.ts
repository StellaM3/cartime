export type User = {
  username: string
  name: string
  email: string
  city: string
  drivingStyle: string
  membership: string
  avatar: string
  favoriteBrands: string[]
}

const STORAGE_KEY = 'cartime_user'

// Utilisateur de test
const TEST_USER: User = {
  username: 'verasierro',
  name: 'Vera Sierro Martín',
  email: 'vera.sierro@cartime.app',
  city: 'Lausanne, Switzerland',
  drivingStyle: 'Sporty daily driver',
  membership: 'Premium · since 2022',
  avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  favoriteBrands: ['Audi', 'BMW'],
}

export const authStore = {
  login(username: string, password: string): boolean {
    // Vérification des identifiants
    if (username === 'verasierro' && password === '12345') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(TEST_USER))
      window.dispatchEvent(new Event('auth-changed'))
      return true
    }
    return false
  },

  logout(): void {
    localStorage.removeItem(STORAGE_KEY)
    window.dispatchEvent(new Event('auth-changed'))
  },

  getCurrentUser(): User | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  },

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null
  },
}

