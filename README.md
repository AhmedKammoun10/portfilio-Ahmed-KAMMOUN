# Ahmed Kammoun — Premium Portfolio

Portfolio React/Vite + Tailwind CSS + Framer Motion + Lucide React.

## Stack

- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Installation

```bash
npm install
npm run dev
```

Build production :

```bash
npm run build
npm run preview
```

## Ajouter la photo

Place ta photo professionnelle ici :

```text
public/profile.jpg
```

Puis remplace le bloc avatar `AK` dans `src/main.jsx` par :

```jsx
<img
  src="/profile.jpg"
  alt="Ahmed Kammoun"
  className="h-full w-full object-cover"
/>
```

## CV

Le fichier `public/Ahmed_KAMMOUN_CV.pdf` est inclus et le bouton Hero permet son téléchargement.

## Déploiement

Le site est une SPA statique. Il peut être déployé sur Vercel, Netlify, GitHub Pages ou tout serveur web statique.

Avant production, remplace `your-domain.com` dans `public/robots.txt` et ajoute une vraie `sitemap.xml`.

## Formulaire

Le formulaire actuel utilise `mailto:` pour rester sans backend. Pour un vrai formulaire web, branche un service comme Formspree/Resend ou ton propre backend.
