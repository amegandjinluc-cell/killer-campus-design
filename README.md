# Killer Campus — Dossier de conception

**Voir le site en ligne :** [killer-campus-design.vercel.app](https://killer-campus-design.vercel.app)

Dossier de conception complet pour **Killer Campus**, une plateforme de services
universitaires centralisés. Le projet reprend la grille de services et la hiérarchie
de l'application **Academia** (capture fournie), puis les transpose dans une identité
sombre, rouge sang et bleu marine.

> **Prototype de démonstration.** Les données, candidatures, commandes et paiements
> sont simulés. Aucun backend n'est connecté et aucune information officielle sur
> l'université pilote n'a été inventée.

## Démarrage rapide

Le dossier est entièrement statique : aucun build ni aucune dépendance réseau.

```bash
cd killer-campus-design
python3 -m http.server 8000
```

Ouvrir ensuite `http://localhost:8000/index.html`.

Le hub `index.html` relie les sept maquettes et les documents. Il est aussi possible
d'ouvrir directement un fichier de `sources/maquettes/` dans un navigateur : les
chemins vers le CSS, le JavaScript et les polices sont relatifs et autonomes.

## Les sept maquettes

| # | Écran | Fichier | Type |
|---|---|---|---|
| 1 | Accueil | `sources/maquettes/accueil.html` | Public |
| 2 | Connexion | `sources/maquettes/connexion.html` | Authentification |
| 3 | Préinscription | `sources/maquettes/preinscription.html` | Parcours candidat |
| 4 | Tableau de bord étudiant | `sources/maquettes/dashboard_etudiant.html` | Étudiant |
| 5 | Catalogue de tenues | `sources/maquettes/catalogue_tenues.html` | Étudiant / boutique |
| 6 | Bibliothèque numérique | `sources/maquettes/bibliotheque.html` | Étudiant |
| 7 | Tableau de bord administrateur | `sources/maquettes/dashboard_admin.html` | Administration |

## Documents de conception

| Livrable | Fichier |
|---|---|
| Cahier des charges | `sources/cahier_des_charges.md` |
| 1. Analyse du projet | `sources/analyse_projet.md` |
| 2. Analyse des références | `sources/analyse_referes.md` |
| 3. Identité visuelle | `sources/identite_visuelle.md` |
| 4. Architecture des pages | `sources/architecture_pages.md` |
| 5. Explication technique | `sources/explications_techniques.md` |
| 6. Points à améliorer et questions | `sources/points_ameliorer_questions.md` |

## Arborescence

```text
killer-campus-design/
├── index.html                  # Hub des maquettes et des documents
├── README.md
├── assets/
│   └── fonts/                  # Inter 400–700 et Oswald 500/700 (auto-hébergées)
├── references/
│   └── referee_academia_20261029.jpg
├── scripts/
│   └── app.js                  # Menu, drawer, filtres, mot de passe, toast, année
├── sources/
│   ├── cahier_des_charges.md
│   ├── analyse_projet.md
│   ├── analyse_referes.md
│   ├── identite_visuelle.md
│   ├── architecture_pages.md
│   ├── explications_techniques.md
│   ├── points_ameliorer_questions.md
│   └── maquettes/
│       ├── accueil.html
│       ├── connexion.html
│       ├── preinscription.html
│       ├── dashboard_etudiant.html
│       ├── catalogue_tenues.html
│       ├── bibliotheque.html
│       └── dashboard_admin.html
└── styles/
    └── killer-campus.css       # Design system unique
```

## Design system

- **Fond** : `#0C0C14`, surfaces `#12121C` / `#171729`, bordures `#2C2C44`.
- **Accent principal** : rouge sang `#C1121F` ; hover `#A40F1B` ; texte doux `#E06C75`.
- **Secondaire** : bleu marine `#1B2A44` / `#243452`.
- **Texte** : `#F6F6FB`, `#D6D6E4`, `#9A9AAE`, `#85859C`.
- **Typographie** : Oswald (titres condensés), Inter (corps), pile monospace système
  pour les métadonnées.
- **Composants** : boutons, badges, cartes, formulaires, stepper, tableaux, toast,
  barres de progression, grilles de services, boutique et bibliothèque.
- **Grille de services** : 4 colonnes sur bureau (4×3), 3 sur tablette, 2 sur mobile.
- **Accessibilité** : lien d'évitement, focus visible, `aria-current`, libellés de
  formulaires, contrastes élevés, respect de `prefers-reduced-motion`.

Les polices sont téléchargées localement dans `assets/fonts/` et déclarées avec
`@font-face` dans `styles/killer-campus.css`. Aucune requête vers un CDN n'est
nécessaire. Inter et Oswald sont distribuées sous licence SIL Open Font License.

## Note sur la référence

La capture Academia montre **3 colonnes sur mobile, 4 lignes, 11 libellés visibles**
et une douzième cellule vide. Le brief demande une grille **4×3** : le design system
la produit sur bureau, avec 11 services réels et un emplacement libre assumé. Aucun
libellé manquant n'a été inventé. Le bouton flottant gris visible sur la capture est
un contrôle de navigation, pas un libellé de service.

## Interactions de démonstration

`scripts/app.js` fournit uniquement des comportements front-end :

- ouverture du menu public sur mobile ;
- ouverture / fermeture du drawer de l'espace connecté et fermeture avec `Échap` ;
- affichage / masquage du mot de passe ;
- filtres à puces sur le catalogue et la bibliothèque ;
- toast pour les actions simulées (`data-demo-action`) ;
- année automatique dans les pieds de page.

Les boutons de paiement, d'envoi de dossier, d'upload, d'achat et de commande
affichent un message de démonstration. Ils ne contactent aucun serveur.

## Limites connues

- Pas de backend, pas d'authentification réelle, pas de base de données.
- Les noms, chiffres, prix, documents et utilisateurs sont fictifs.
- Le nom officiel de l'université pilote reste « à confirmer ».
- Les maquettes ne prétendent pas être un produit fini : ce sont des preuves de
  conception pour la revue.
