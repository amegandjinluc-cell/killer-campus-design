# 5. Explication technique

## 5.1 Technologies du prototype

| Couche | Choix | Rôle |
|---|---|---|
| Structure | HTML5 sémantique | Sept pages autonomes |
| Style | CSS3, variables CSS | Design system unique, responsive |
| Comportement | JavaScript vanilla (ES2020+) | Menu, drawer, filtres, toast, mot de passe |
| Polices | Inter et Oswald auto-hébergées | Rendu typographique local |
| Build | Aucun | Ouverture directe ou serveur statique |
| Backend | Aucun dans le prototype | À définir pour la production |

Le prototype est volontairement **sans framework** : il peut être ouvert dans un
navigateur ou servi par n'importe quel serveur statique.

## 5.2 Arborescence réelle

```text
killer-campus-design/
├── index.html                  # Hub des maquettes et documents
├── assets/fonts/               # Inter 400–700, Oswald 500/700
├── references/                 # Capture de référence
├── scripts/app.js              # Interactions partagées
├── sources/                    # Documents de conception
│   └── maquettes/              # Sept écrans HTML
└── styles/killer-campus.css    # Design system complet
```

### Design system

`styles/killer-campus.css` contient, dans l'ordre :

1. les `@font-face` ;
2. les tokens (`:root`) ;
3. le reset et la typographie ;
4. les composants (boutons, badges, cartes, formulaires) ;
5. les layouts (topbar, hero, footer, app-shell, sidebar) ;
6. les modules (dashboard, boutique, bibliothèque, admin, auth, hub) ;
7. les utilitaires et les media queries.

Les noms de classes suivent un **BEM simplifié** :

- `.card`, `.card--notice` ;
- `.btn`, `.btn--primary`, `.btn--ghost`, `.btn--outline`, `.btn--sm` ;
- `.badge`, `.badge--red`, `.badge--green`, `.badge--amber` ;
- `.service-grid`, `.service-card`, `.service-icon`, `.service-label` ;
- `.topbar`, `.topbar-inner`, `.topbar-nav`, `.topbar-link` ;
- `.app-shell`, `.sidebar`, `.app-main`, `.app-content`.

### Pourquoi un seul fichier CSS

- Une seule source de vérité pour les tokens et les composants.
- Les sept maquettes partagent exactement la même apparence.
- Le fichier reste lisible et peut être découpé plus tard (Sass, CSS Modules) sans
  changer les classes.

## 5.3 Comportements implémentés

`scripts/app.js` est un module IIFE, sans dépendance :

| Fonction | Sélecteur | Effet |
|---|---|---|
| Menu public | `[data-menu-toggle]`, `[data-mobile-nav]` | Ouvre/ferme le menu mobile |
| Drawer | `[data-sidebar]`, `[data-sidebar-toggle]` | Ouvre/ferme la sidebar |
| Voile | `[data-sidebar-scrim]` | Ferme le drawer au clic |
| Échap | `keydown` | Ferme le drawer |
| Mot de passe | `[data-password-toggle]` | Affiche/masque le champ |
| Filtres | `[data-filter-group]` | Filtre les cartes par `data-category` |
| Toast | `[data-demo-action]` | Affiche un message de démonstration |
| Année | `[data-year]` | Injecte l'année courante |

Les actions critiques (paiement, envoi de dossier, upload, achat) ne font **que**
afficher un toast. Aucun `fetch`, aucun stockage et aucun traitement de données
personnelles ne sont effectués.

## 5.4 Fonctionnement des modules

### 5.4.1 Accueil

Page publique de présentation. Elle présente la promesse, un aperçu du tableau de
bord, trois bénéfices et le parcours candidat. Les liens mènent aux maquettes.

### 5.4.2 Connexion

Formulaire de démonstration. Le bouton affiche un toast ; le mot de passe peut être
masqué/affiché. En production : validation, gestion de session, MFA éventuelle.

### 5.4.3 Préinscription

Formulaire en quatre étapes visuelles. Les champs sont natifs (`input`, `select`,
`textarea`), les uploads sont des boutons. En production : validation, stockage
sécurisé des pièces, notifications et suivi d'état.

### 5.4.4 Tableau de bord étudiant

Grille de 11 services + 1 slot libre, statistiques, activité, événements et
progression. En production : les services seraient pilotés par les rôles et les
inscriptions de l'étudiant.

### 5.4.5 Catalogue de tenues

Filtres à puces, six produits, panier statique. En production : catalogue serveur,
gestion des tailles et des stocks, panier persistant, paiement sécurisé.

### 5.4.6 Bibliothèque numérique

Ressources gratuites et payantes, filtres, emprunts. En production : stockage des
fichiers, droits d'accès, prêts, paiement et quotas de téléchargement.

### 5.4.7 Administration

Tableau d'utilisateurs, tâches, actions rapides et graphique. En production :
contrôle de rôle côté serveur, pagination, recherche, audit et exports.

## 5.5 Données nécessaires (cible production)

### Accueil

- Textes de marque, bénéfices, CTA, mentions légales.

### Connexion

- Identifiant, mot de passe, jeton de session, rôle.

### Tableau de bord étudiant

- `user.id`, `user.name`, `user.avatar`, `user.program`.
- `stats` : cours, présence, moyenne, événements.
- `services[]` : id, label, icon, active, badge.
- `recent_activity[]`, `events[]`, `progress[]`.

### Préinscription

- `applicant` : identité, contact.
- `program` : université, filière, niveau, promotion.
- `documents[]` : type, fichier, statut.
- `application.status` : brouillon, soumis, en vérification, validé, rejeté.

### Boutique

- `products[]` : id, nom, type, taille, prix, visuel, disponibilité.
- `cart[]` : produit, quantité, taille.
- `order.status` : panier, commandé, expédié, livré.

### Bibliothèque

- `resources[]` : id, titre, auteur, catégorie, format, prix, extrait.
- `loans[]` : ressource, date de début, date d'expiration, statut.

### Administration

- `users[]`, `applications[]`, `orders[]`, `resources[]`, `stats[]`.
- `roles[]` et journal d'audit.

## 5.6 Accessibilité et performance

- **Contraste** : texte `#F6F6FB` sur `#12121C`, ratio très élevé.
- **Focus** : `:focus-visible` avec anneau rouge.
- **Structure** : `header`, `nav`, `main`, `aside`, `footer`, titres hiérarchisés.
- **Formulaires** : labels explicites, `autocomplete`, `required`, aides visibles.
- **Mouvement** : `prefers-reduced-motion` désactive les transitions.
- **Polices** : fichiers locaux, `font-display: swap`, pas de requête réseau.
- **Images** : aucune image lourde dans les pages ; les visuels sont des SVG inline.
- **Performance** : CSS unique, JavaScript de moins de 4 Ko, pas de framework.

## 5.7 Limites et prochaines étapes

- Ajouter un backend et une vraie authentification.
- Remplacer les données fictives par des données validées.
- Implémenter les états de chargement, d'erreur et de vide.
- Tester avec des lecteurs d'écran et sur appareils réels.
- Valider le nom de l'université, les règles de préinscription et les obligations de
  protection des données.
- Prévoir une version anglaise si le public est multilingue.
