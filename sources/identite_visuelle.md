# 3. Identité visuelle

## 3.1 Palette de couleurs

La charte repose sur une **nuit profonde** et un **rouge sang** qui donne l'énergie et
la gravité. Le bleu marine est conservé comme secondaire, en souvenir de l'en-tête de
la référence Academia.

| Nom | Hex | Usage |
|---|---|---|
| **Noir nuit** | `#0C0C14` | Fond général |
| **Surface** | `#12121C` | Cartes et panneaux principaux |
| **Surface 2** | `#171729` | Champs, sous-panneaux |
| **Surface 3** | `#1D1D31` | Survols, lignes de tableau |
| **Bordure** | `#2C2C44` | Séparateurs et contours |
| **Bordure forte** | `#3D3D58` | Composants actifs |
| **Bleu marine** | `#1B2A44` | Secondaire, informations |
| **Marine doux** | `#243452` | Ligne d'état, icônes secondaires |
| **Rouge sang** | `#C1121F` | Action principale, badges, accents |
| **Rouge intense** | `#A40F1B` | Survol et états actifs |
| **Rouge doux** | `#E06C75` | Texte d'alerte, icônes |
| **Rouge profond** | `#7A0E1E` | Dégradés, profondeur |
| **Blanc nuage** | `#F6F6FB` | Texte primaire |
| **Gris clair** | `#D6D6E4` | Texte secondaire |
| **Gris moyen** | `#9A9AAE` | Texte de détail |
| **Gris faible** | `#85859C` | Métadonnées, texte discret |
| **Vert succès** | `#2E9E6B` | États positifs |
| **Ambre** | `#E8A33D` | Avertissements, en cours |

### Justification des choix

- **Fond nuit `#0C0C14`** : plus sombre que les cartes, il crée la profondeur sans
  dégradé complexe et garde un contraste très élevé avec le texte.
- **Rouge sang `#C1121F`** : couleur d'action immédiatement lisible, cohérente avec
  l'idée d'urgence et de résultats. Elle remplace le bleu de la référence comme
  signal principal.
- **Bleu marine `#1B2A44`** : il ne disparaît pas ; il apporte une caution
  universitaire et sert aux informations neutres.
- **Gris `#D6D6E4` / `#9A9AAE` / `#85859C`** : hiérarchie de texte sans blanc partout,
  ce qui évite un rendu trop dur et préserve la lisibilité.
- **Vert et ambre** : réservés aux états, jamais à la décoration.

## 3.2 Typographie

### Familles

- **Titres et accroches** : **Oswald** (condensée, poids 500/700). Elle donne un effet
  d'affiche, adapté aux grands titres et aux chiffres.
- **Corps** : **Inter** (400/500/600/700), très lisible à petite taille et sur mobile.
- **Métadonnées** : pile monospace système, pour les libellés techniques.

Les deux familles sont **auto-hébergées** dans `assets/fonts/` et déclarées avec
`@font-face` dans le CSS. Aucune dépendance à un CDN n'est nécessaire.

### Échelle

```text
titre principal : clamp(52px, 7.2vw, 104px) / 0.9 / 900 (Oswald)
h2              : clamp(28px, 3.4vw, 44px) / 1 / 800
h3              : 18–20px / 1.2 / 700–800
corps           : 14–15px / 1.6 / 400–500
étiquette       : 10–13px / 1.2 / 600 (majuscules, letter-spacing)
bouton          : 11–14px / 1 / 600
```

### Règles de composition

- Graisses 600 à 900 pour les titres, jamais 400.
- Majuscules réservées aux titres, aux étiquettes et aux boutons.
- Interligne serré sur les grands titres, plus aéré sur le corps.
- Pas de tracking négatif excessif : le texte doit rester lisible.

## 3.3 Icônes

- **Style** : linéaire, monochrome, trait épais (environ 2 px), sans remplissage ni
  dégradé.
- **Source** : SVG inline, dessinés dans le même vocabulaire que Feather / Lucide.
- **Couleur** : gris clair pour les icônes de service, rouge pour les actions et les
  notifications.
- **Taille** : 20 px par défaut, 16 px pour les actions compactes, 24 px pour les
  tuiles de service.
- **Accessibilité** : `aria-hidden="true"` sur les icônes décoratives, libellé texte
  systématique pour les actions.

## 3.4 Composants

### Boutons

- **Primaire** : fond rouge `#C1121F`, texte blanc, léger relief.
- **Ghost** : fond transparent, bordure `#2C2C44`, texte clair.
- **Outline** : bordure rouge, texte rouge, fond transparent.
- **Petit format** : `btn--sm`, hauteur réduite pour les barres d'outils.
- **États** : survol, actif, focus visible, désactivé.

### Cartes et panneaux

- Fond `#12121C` / `#171729`, bordure `#2C2C44`, rayon 13–16 px.
- Ombre douce, jamais de bordure lourde.
- Les cartes de service sont des cibles cliquables de 132 px de haut minimum.
- La cellule active utilise un dégradé rouge très sombre et une icône rouge.

### Formulaires

- Fond `#171729`, bordure `#2C2C44`, hauteur 46 px.
- Label au-dessus, astérisque rouge pour les champs requis, aide en gris.
- Focus visible avec anneau rouge discret.
- Erreurs en rouge, jamais uniquement par la couleur : un texte accompagne l'état.

### Badges

- Rouge : notifications et alertes.
- Marine : informations neutres.
- Vert : validé, actif, disponible.
- Ambre : en attente, en cours.
- Forme : pilule, texte court, contraste vérifié.

### Tableaux

- En-tête en majuscules discrètes, lignes séparées par `#2C2C44`.
- Avatar + nom + email dans la première colonne.
- Actions à droite, icônes compactes.
- Sur mobile, le tableau reste lisible par défilement horizontal contrôlé.

## 3.5 Responsive

### Breakpoints

| Étendue | Grille de services | Notes |
|---|---|---|
| `≥ 1025px` (bureau) | 4 colonnes × 3 lignes | Sidebar visible, contenu large |
| `641–1024px` (tablette) | 3 colonnes | Sidebar en drawer, contenu empilé |
| `≤ 640px` (mobile) | 2 colonnes | Boutons pleine largeur, navigation en menu |
| `≤ 430px` | 2 colonnes compactes | Typographie et espacements réduits |

### Grille de services

- **Bureau** : `repeat(4, 1fr)` — 12 cellules, soit 4×3.
- **Tablette** : `repeat(3, 1fr)`.
- **Mobile** : `repeat(2, 1fr)`.
- La référence montre 3 colonnes × 4 lignes sur mobile avec 11 services et une
  cellule vide. Le prototype transpose cette grille en 4×3 sur bureau, sans inventer
  de douzième libellé.

### Mise en page

- Conteneur maximal de 1200 px, centré, avec 24 px de marge latérale.
- Les grilles de contenu passent de 2–3 colonnes à une seule sur tablette/mobile.
- Les panneaux latéraux (panier, emprunts) deviennent statiques sous le contenu.
- Le drawer de l'espace connecté se ferme avec `Échap` ou un clic sur le voile.

### Accessibilité

- Lien d'évitement vers le contenu principal.
- Navigation clavier et focus visible sur tous les contrôles.
- Contrastes élevés : texte clair sur fond nuit.
- `prefers-reduced-motion` désactive les transitions non essentielles.
