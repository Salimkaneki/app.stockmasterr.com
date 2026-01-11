# Nouveaux Composants UI

## Composants créés pour améliorer la réutilisabilité

### PageHeader
Header standardisé pour toutes les pages dashboard.

```tsx
<PageHeader
  title="Titre de la page"
  description="Description optionnelle"
>
  <ActionButton variant="primary">Action</ActionButton>
</PageHeader>
```

### StatusBadge
Badge de statut avec couleurs automatiques selon le statut.

```tsx
<StatusBadge status="Actif" />
<StatusBadge status="En stock" variant="in-stock" />
```

### InfoCard
Carte d'information avec variantes claire et sombre.

```tsx
<InfoCard title="Titre de la carte">
  <p>Contenu de la carte</p>
</InfoCard>

<InfoCard title="Carte sombre" variant="dark">
  <p>Contenu sombre</p>
</InfoCard>
```

### ActionButton
Bouton d'action avec différentes variantes et tailles.

```tsx
<ActionButton variant="primary" icon={<LuPlus />}>
  Ajouter
</ActionButton>

<ActionButton variant="secondary" size="sm" showArrow>
  Voir tout
</ActionButton>
```

### SearchBar
Barre de recherche standardisée.

```tsx
<SearchBar placeholder="RECHERCHER..." />
```

### FormSection
Section de formulaire avec titre et icône.

```tsx
<FormSection title="Informations générales" icon={<LuInfo />}>
  {/* Champs du formulaire */}
</FormSection>
```

### ProductCard
Carte produit pour l'interface caisse.

```tsx
<ProductCard
  name="Clavier RGB"
  price={45000}
  category="Hardware"
  inStock={true}
  onClick={() => addToCart(product)}
/>
```

### EmptyState
État vide pour les listes sans contenu.

```tsx
<EmptyState
  icon={<LuPackage />}
  title="Aucun produit"
  description="Ajoutez votre premier produit"
  action={<ActionButton>Ajouter un produit</ActionButton>}
/>
```

### LoadingSpinner
Indicateur de chargement.

```tsx
<LoadingSpinner size="md" text="Chargement..." />
```

## Migration recommandée

1. **PageHeader** : Remplacer tous les headers de pages dashboard
2. **StatusBadge** : Remplacer tous les badges de statut personnalisés
3. **ActionButton** : Standardiser tous les boutons d'action
4. **InfoCard** : Utiliser pour tous les widgets d'information
5. **SearchBar** : Pour toutes les barres de recherche
6. **FormSection** : Pour structurer les formulaires complexes