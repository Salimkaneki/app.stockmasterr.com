# Pages du projet — Présentes et manquantes

Ce document recense les pages/route existantes dans le projet et les pages recommandées à ajouter (POS et compléments).

## Pages présentes (extrait)
- app/page.tsx

- App (admin-shop)
  - app/(admin-shop)/auth/page.tsx
  - app/(admin-shop)/register/page.tsx
  - app/(admin-shop)/dashboard/layout.tsx
  - app/(admin-shop)/dashboard/page.tsx
  - app/(admin-shop)/dashboard/customers/page.tsx
  - app/(admin-shop)/dashboard/customers/new/page.tsx
  - app/(admin-shop)/dashboard/products/page.tsx
  - app/(admin-shop)/dashboard/products/new/page.tsx
  - app/(admin-shop)/dashboard/sales/page.tsx
  - app/(admin-shop)/dashboard/sales/new/page.tsx
  - app/(admin-shop)/dashboard/stock/page.tsx
  - app/(admin-shop)/dashboard/stock/new/page.tsx
  - app/(admin-shop)/dashboard/invoices/page.tsx
  - app/(admin-shop)/dashboard/debts/page.tsx
  - app/(admin-shop)/dashboard/suppliers/page.tsx
  - app/(admin-shop)/dashboard/staff/page.tsx
  - app/(admin-shop)/dashboard/staff/new-member/page.tsx
  - app/(admin-shop)/dashboard/settings/page.tsx
  - app/(admin-shop)/dashboard/notifications/page.tsx
  - app/(admin-shop)/dashboard/notifications/details/page.tsx

- App (cashier)
  - app/(cashier)/login/page.tsx
  - app/(cashier)/cashier/page.tsx

- Test & erreurs
  - app/test/page.tsx
  - app/test/landing-1/page.tsx
  - app/test/modals/page.tsx
  - app/test/errors/404-prop/page.tsx

- Composants UI/Helpers (extraits)
  - components/ui/forms/Input.tsx, Select.tsx, Dropdown.tsx, Checkbox.tsx, Radio.tsx, Textarea.tsx, FileInput.tsx
  - components/ui/layout/PageLayout.tsx, PageHeader.tsx, PageContainer.tsx, FormSection.tsx, InfoCard.tsx
  - components/ui/products/ProductCard.tsx
  - components/data/DataTable.tsx, KPI.tsx
  - components/layout/Sidebar.tsx
  - components/ui/feedback/EmptyState.tsx, LoadingSpinner.tsx, StatusBadge.tsx

## Pages manquantes recommandées (prioritaires → secondaires)

1) POS (point de vente) — priorité future mais planifier maintenant
   - route: `/pos` ou `/(cashier)/pos` (interface caisse rapide)
   - composants: `POSLayout`, `CartPanel`, `CheckoutModal`, `PaymentMethods`, `ReceiptPrinter`, `BarcodeScanner`, `QuickPaymentButton`
   - features: mode hors-ligne, impression, tiroir caisse, scan, paiements rapides

2) Détails & édition (CRUD complet)
   - `app/(admin-shop)/dashboard/products/[id]/page.tsx` (détail + édition)
   - `app/(admin-shop)/dashboard/customers/[id]/page.tsx`
   - `app/(admin-shop)/dashboard/invoices/[id]/page.tsx` (PDF / téléchargement)
   - `app/(admin-shop)/dashboard/sales/[id]/page.tsx`
   - `app/(admin-shop)/dashboard/staff/[id]/page.tsx`
   - `app/(admin-shop)/dashboard/suppliers/new/page.tsx` (si création manquante)

3) Rapports & analytics
   - `app/(admin-shop)/dashboard/reports/page.tsx`
   - sous-rapports: `reports/sales`, `reports/inventory`, `reports/customers`

4) Paramètres & intégrations
   - `app/(admin-shop)/dashboard/settings/payments/page.tsx`
   - `app/(admin-shop)/dashboard/settings/integrations/page.tsx` (gateways, imprimantes)
   - `app/(admin-shop)/dashboard/settings/taxes/page.tsx`

5) Permissions, audit et sécurité
   - `app/(admin-shop)/dashboard/roles/page.tsx` (RBAC)
   - `app/(admin-shop)/dashboard/audit/logs/page.tsx`

6) Import/Export & Bulk actions
   - composants/pages: `ImportCSV`, `ExportCSV`, `BulkActions` (pour produits, clients)

7) APIs / Webhooks
   - dossier `app/api/` avec endpoints: `api/payments`, `api/webhooks`, `api/invoices`, `api/sales`

8) Tests & accessibilité
   - ajouter `__tests__` ou config E2E (Cypress/Playwright)
   - tests a11y, responsive, et PWA si visé

## Recommandations concrètes (prochaines étapes)
- Priorité immédiate: ajouter pages de détail/édition (`[id]`) pour `products`, `customers`, `invoices`, `sales`.
- Définir les modèles de données (Product, Customer, Invoice, Sale, StockMovement, User/Role).
- Créer un dossier `app/api/` et définir contrats CRUD et endpoints d'intégration (paiements, webhooks).
- Concevoir wireframes POS minimal (flux caisse) pour faciliter implémentation future.
- Ajouter pages `settings/payments` et `reports` avant d'entamer POS.

---

Si tu veux, je peux :
- générer automatiquement les fichiers de route vides (`products/[id]/page.tsx`, etc.),
- produire une checklist détaillée pour l'implémentation POS,
- ou lancer l'étape suivante: ouvrir et vérifier le code de `products`, `sales`, `invoices`.

Indique ce que tu préfères. 