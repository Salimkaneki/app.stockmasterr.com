# Composants UI

Bibliothèque de composants d'interface utilisateur réutilisables pour le projet.

## Composants disponibles

### Input
Champ de texte avec support des icônes, erreurs et texte d'aide.

```tsx
import { Input } from "@/components/ui";

<Input
  label="Nom"
  placeholder="Entrez votre nom"
  startIcon={<LuUser />}
  error="Ce champ est requis"
/>
```

**Props :**
- `label?: string` - Label du champ
- `error?: string` - Message d'erreur
- `helperText?: string` - Texte d'aide
- `startIcon?: ReactNode` - Icône à gauche
- `endIcon?: ReactNode` - Icône à droite
- Tous les props HTML input standards

### Select
Menu déroulant stylisé.

```tsx
import { Select } from "@/components/ui";

<Select
  label="Pays"
  placeholder="Sélectionnez un pays"
  options={[
    { value: "fr", label: "France" },
    { value: "ci", label: "Côte d'Ivoire" }
  ]}
/>
```

**Props :**
- `label?: string` - Label du champ
- `error?: string` - Message d'erreur
- `helperText?: string` - Texte d'aide
- `placeholder?: string` - Placeholder
- `options: Array<{value: string, label: string, disabled?: boolean}>` - Options du select

### FileInput
Upload de fichiers avec aperçu pour les images.

```tsx
import { FileInput } from "@/components/ui";

<FileInput
  label="Photo de profil"
  accept="image/*"
  maxSize={2}
  preview={true}
  onFileSelect={(file) => console.log(file)}
/>
```

**Props :**
- `label?: string` - Label du champ
- `error?: string` - Message d'erreur
- `helperText?: string` - Texte d'aide
- `accept?: string` - Types de fichiers acceptés
- `maxSize?: number` - Taille max en MB
- `preview?: boolean` - Afficher l'aperçu
- `onFileSelect?: (file: File | null) => void` - Callback de sélection

### Dropdown
Menu déroulant avec items personnalisables.

```tsx
import { Dropdown } from "@/components/ui";

<Dropdown
  trigger="Actions"
  align="right"
  items={[
    { label: "Modifier", value: "edit", icon: <LuEdit />, onClick: handleEdit },
    { label: "Supprimer", value: "delete", icon: <LuTrash />, onClick: handleDelete }
  ]}
/>
```

**Props :**
- `trigger: ReactNode` - Élément déclencheur
- `items: DropdownItem[]` - Items du menu
- `align?: "left" | "right"` - Alignement du menu

### Textarea
Zone de texte multiligne.

```tsx
import { Textarea } from "@/components/ui";

<Textarea
  label="Description"
  rows={4}
  resize="vertical"
  placeholder="Entrez une description..."
/>
```

**Props :**
- `label?: string` - Label du champ
- `error?: string` - Message d'erreur
- `helperText?: string` - Texte d'aide
- `resize?: "none" | "vertical" | "horizontal" | "both"` - Redimensionnement
- `rows?: number` - Nombre de lignes
- Tous les props HTML textarea standards

### Checkbox
Case à cocher stylisée.

```tsx
import { Checkbox } from "@/components/ui";

<Checkbox
  label="J'accepte les conditions"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>
```

**Props :**
- `label?: string` - Label de la checkbox
- `error?: string` - Message d'erreur
- `helperText?: string` - Texte d'aide
- Tous les props HTML input standards

### Radio
Bouton radio stylisé.

```tsx
import { Radio } from "@/components/ui";

<Radio
  label="Option 1"
  name="options"
  value="option1"
  checked={selected === "option1"}
  onChange={(e) => setSelected(e.target.value)}
/>
```

**Props :**
- `label?: string` - Label du radio
- `error?: string` - Message d'erreur
- `helperText?: string` - Texte d'aide
- Tous les props HTML input standards

## Utilisation

```tsx
import {
  Input,
  Select,
  FileInput,
  Dropdown,
  Textarea,
  Checkbox,
  Radio
} from "@/components/ui";
```

## Style et design

Tous les composants suivent le design system du projet :
- Police : Google Sans
- Couleurs : Palette zinc
- États : hover, focus, error
- Espacement : Cohérent avec le reste de l'application
- Accessibilité : Labels, focus states, screen readers