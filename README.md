# mon-portfolio

Portfolio de Lucien Devars du Mayne.

## Arborescence

```
mon-portfolio/
├── frontend/            # application Next.js (tout le code côté client)
│   ├── src/
│   │   ├── app/         # App Router : layout, page, styles globaux
│   │   ├── components/  # composants de présentation (Hero, Projects, …)
│   │   └── data/        # contenu du portfolio (portfolio.ts)
│   └── public/          # assets statiques (CV, images, …)
└── README.md
```

Un dossier `backend/` pourra être ajouté à la racine plus tard.

## Démarrer le frontend

```bash
cd frontend
pnpm install
pnpm dev
```

Ouvrir http://localhost:3000.

## Direction artistique

Première version basée sur la maquette **B — Vague** : identité navy / cream,
motif de vague repris du CV, mono-thème. Le contenu se modifie dans
[`frontend/src/data/portfolio.ts`](frontend/src/data/portfolio.ts).
