# CarTime - Atlas des marques automobiles

CarTime est une application web interactive permettant d'explorer l'histoire des marques automobiles à travers des frises chronologiques, des collections personnalisées et une carte mondiale interactive.

## 🚀 Installation et lancement en local

### Prérequis

- **Node.js** (version 18 ou supérieure)
- **npm** ou **yarn**
- **Git**

### Étapes d'installation

1. **Cloner le projet depuis GitHub**

```bash
git clone [URL_DU_REPO]
cd CarTime
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

4. **Ouvrir l'application dans votre navigateur**

L'application sera accessible à l'adresse : `http://localhost:5173`

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🔐 Compte de démonstration

Pour accéder aux fonctionnalités nécessitant une connexion (collections, profil) :

- **Username** : `verasierro`
- **Password** : `12345`

## 🛠️ Technologies utilisées

- **React** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et serveur de développement
- **React Router** - Navigation
- **LocalStorage** - Persistance des données (authentification et collections)

## 📁 Structure du projet

```
CarTime/
├── src/
│   ├── components/      # Composants réutilisables
│   ├── pages/          # Pages de l'application
│   ├── data/           # Données mockées (marques, modèles)
│   ├── utils/          # Utilitaires (auth, collections)
│   ├── App.tsx         # Composant principal et routes
│   ├── App.css         # Styles globaux
│   └── main.tsx        # Point d'entrée
├── public/             # Assets statiques
└── package.json        # Dépendances et scripts
```

## ✨ Fonctionnalités principales

### Sans connexion
- 🗺️ **Map** - Carte mondiale interactive avec les marques géolocalisées
- 🏢 **Brands** - Liste des marques automobiles avec filtres par région
- 📅 **Timeline** - Frises chronologiques des modèles emblématiques
- 📝 **Blog** - Articles sur l'automobile
- 🚗 **Détails des modèles** - Fiches techniques, histoire et anecdotes

### Avec connexion
- 📚 **Collections** - Créer et gérer des collections de modèles
- 👤 **Profile** - Gérer son compte et ses informations
- ➕ **Add to collection** - Ajouter des modèles à ses collections

## 🎨 Personnalisation

Les styles principaux se trouvent dans `src/App.css`. Le thème utilise une palette de couleurs sombres avec des accents bleu cyan.

## 🐛 Résolution de problèmes

### Le serveur ne démarre pas
- Vérifiez que le port 5173 n'est pas déjà utilisé
- Supprimez `node_modules` et relancez `npm install`

### Les données ne se sauvegardent pas
- Vérifiez que le localStorage n'est pas désactivé dans votre navigateur
- Testez en navigation privée pour voir si des extensions bloquent le stockage

## 📄 Licence

Ce projet est un prototype éducatif.

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le repository
2. Créez une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

---

Développé avec ❤️ et React
