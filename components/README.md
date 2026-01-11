# Architecture des Composants UI

## Structure Organisée

```
components/
├── ui/                    # Bibliothèque de composants UI
│   ├── forms/            # Composants de formulaire
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── FileInput.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Textarea.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Radio.tsx
│   │   └── index.ts
│   ├── layout/           # Composants de mise en page
│   │   ├── PageHeader.tsx
│   │   ├── FormSection.tsx
│   │   ├── InfoCard.tsx
│   │   └── index.ts
│   ├── feedback/         # Composants de retour utilisateur
│   │   ├── StatusBadge.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── EmptyState.tsx
│   │   └── index.ts
│   ├── actions/          # Composants d'action
│   │   ├── ActionButton.tsx
│   │   ├── SearchBar.tsx
│   │   └── index.ts
│   ├── products/         # Composants spécifiques produits
│   │   ├── ProductCard.tsx
│   │   └── index.ts
│   ├── index.ts          # Export principal
│   └── README-NEW-COMPONENTS.md
├── data/                 # Composants de données
│   ├── DataTable.tsx
│   ├── KPI.tsx
│   └── index.ts
└── layout/               # Composants de layout global
    └── Sidebar.tsx
```

## Principes d'Organisation

### 📁 **forms/** - Composants de Formulaire
- Composants pour la saisie et validation de données
- Champs de formulaire, sélecteurs, cases à cocher, etc.

### 📐 **layout/** - Composants de Mise en Page
- Composants structurels pour organiser le contenu
- Headers, sections, cartes d'information

### 💬 **feedback/** - Composants de Feedback
- Indicateurs visuels pour l'utilisateur
- Badges de statut, états de chargement, états vides

### 🎯 **actions/** - Composants d'Action
- Boutons, barres de recherche, contrôles interactifs
- Éléments qui déclenchent des actions utilisateur

### 🛍️ **products/** - Composants Produits
- Composants spécifiques à l'affichage des produits
- Cartes produit, grilles, etc.

### 📊 **data/** - Composants de Données
- Composants pour afficher et manipuler des données
- Tableaux, graphiques, KPIs

## Utilisation

### Import depuis la racine UI
```tsx
import { Input, PageHeader, StatusBadge, ActionButton } from "@/components/ui";
```

### Import depuis un sous-dossier spécifique
```tsx
import { Input, Select } from "@/components/ui/forms";
import { PageHeader } from "@/components/ui/layout";
```

### Import des composants de données
```tsx
import { DataTable, KPI } from "@/components/data";
```

## Avantages de cette Structure

- **🔍 Facilité de recherche** : Trouver rapidement les composants par fonctionnalité
- **📦 Imports modulaires** : Importer seulement ce dont on a besoin
- **🧩 Maintenabilité** : Organisation logique facilite l'ajout de nouveaux composants
- **🎯 Responsabilités claires** : Chaque dossier a un rôle bien défini
- **📚 Documentation** : Structure auto-documentée

## Conventions de Nommage

- **Fichiers** : `PascalCase.tsx` (ex: `ActionButton.tsx`)
- **Dossiers** : `camelCase` (ex: `feedback/`)
- **Exports** : Même nom que le fichier (ex: `export function ActionButton`)
- **Types** : `ComponentNameProps` (ex: `ActionButtonProps`)

## Ajout de Nouveaux Composants

1. Choisir le dossier approprié selon la responsabilité
2. Créer le fichier `.tsx`
3. Créer l'interface de props si nécessaire
4. Ajouter l'export dans le fichier `index.ts` du dossier
5. Mettre à jour la documentation si nécessaire