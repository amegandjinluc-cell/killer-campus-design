# Brief de conception — Killer Campus

## 1. En une phrase

**Killer Campus** est une plateforme qui centralise les services universitaires
(profil, cours, présences, frais, devoirs, résultats, événements, emploi du temps,
circulaires, drive, vacances) dans un tableau de bord unique, avec une identité
sombre, rouge sang et bleu marine.

Le dossier contient **7 maquettes HTML/CSS**, un **design system commun** et les
documents de conception qui expliquent les choix.

## 2. Le problème

Un étudiant doit aujourd'hui consulter plusieurs services séparés : un portail pour
les cours, un autre pour les notes, un autre pour la bibliothèque, un autre pour la
boutique, etc. Cette fragmentation :

- allonge les déplacements entre écrans ;
- rend les actions fréquentes difficiles à retrouver ;
- donne une image peu cohérente de l'université.

**La promesse de Killer Campus :** un seul point d'entrée, une hiérarchie claire,
des services identifiables en un coup d'œil.

## 3. La démarche de conception

### Étape 1 — Cadrage

Lecture du cahier des charges et des contraintes :

- une seule université pilote au départ ;
- 7 écrans à produire ;
- aucun backend réel ;
- aucune donnée officielle inventée ;
- les paiements, candidatures et uploads doivent rester simulés.

### Étape 2 — Analyse de la référence

La capture **Academia** a été analysée pour comprendre sa structure :

- en-tête avec marque, menu et notifications ;
- bloc université avec écusson ;
- grille de services iconographique ;
- cellule active mise en évidence.

La capture montre **3 colonnes × 4 lignes, 11 libellés visibles et une cellule
vide**. Le brief demandant une grille **4×3 sur bureau**, le prototype utilise
**11 services réels + 1 emplacement libre**. Aucun douzième nom n'a été inventé.

### Étape 3 — Direction artistique

La référence est claire et bleue. Killer Campus inverse le contraste :

- **fond nuit** `#0C0C14` ;
- **rouge sang** `#C1121F` pour les actions et les alertes ;
- **bleu marine** `#1B2A44` comme secondaire institutionnel ;
- **Oswald** pour les titres condensés ;
- **Inter** pour le corps de texte.

Objectif : garder la lisibilité et la hiérarchie de la référence, mais donner une
identité plus affirmée, plus mémorable et plus “campus”.

### Étape 4 — Design system

Un seul fichier CSS porte toute la charte : `styles/killer-campus.css`.

Il contient :

- les variables de couleur, d'espacement et de rayon ;
- les polices auto-hébergées ;
- les composants : boutons, badges, cartes, formulaires, tableaux, toast ;
- les layouts : topbar, hero, sidebar, footer ;
- les modules : dashboard, boutique, bibliothèque, admin, préinscription ;
- les media queries.

Les maquettes utilisent les mêmes classes : `.btn`, `.card`, `.panel`,
`.service-grid`, `.topbar`, `.sidebar`, etc.

### Étape 5 — Maquettes et validation

Les 7 écrans ont été codés directement en HTML/CSS, puis testés dans le navigateur :

- navigation et liens ;
- filtres du catalogue et de la bibliothèque ;
- ouverture du menu mobile et du drawer ;
- affichage du mot de passe ;
- toasts sur les actions simulées ;
- soumission de formulaire sans rechargement ;
- responsive à 375 px, 520 px et 912 px ;
- audit Lighthouse accessibilité.

## 4. Outils utilisés pour cette version

| Outil | Usage |
|---|---|
| **HTML5 / CSS3** | Structure et design system |
| **JavaScript vanilla** | Menu, drawer, filtres, toast, mot de passe |
| **SVG inline** | Icônes, sans dépendance externe |
| **Inter + Oswald** | Polices auto-hébergées dans `assets/fonts/` |
| **Python `http.server`** | Serveur local de validation |
| **Navigateur + Lighthouse** | Tests responsive et accessibilité |
| **Git / GitHub** | Versionnement et dépôt public |
| **Vercel** | Déploiement et redéploiement automatique |

**Ce qui n'a pas été utilisé :** aucun framework CSS, aucun framework JS, aucun CDN,
aucune base de données, aucun backend.

### Outils recommandés pour la suite

| Besoin | Outil conseillé |
|---|---|
| Wireframes et exploration | **Figma** |
| Design system versionné | **Figma** + tokens CSS |
| Développement front | **React / Next.js** ou **Vue / Nuxt** |
| Backend | **Node.js / NestJS** ou **Python / FastAPI** |
| Base de données | **PostgreSQL** |
| Authentification | **Auth.js**, **Clerk** ou solution interne |
| Paiement | **Stripe** en mode test, ou opérateur local |
| Tests | **Playwright** + **axe-core** |
| Déploiement | **Vercel** (front) + hébergeur backend |

> Figma n'a pas été utilisé pour cette version : les maquettes ont été construites
> directement en HTML/CSS pour valider le rendu réel, les polices et le responsive.
> Pour une itération avec plusieurs designers, Figma devient utile en amont.

## 5. Décisions de design à retenir

1. **Grille de services** : 4×3 sur bureau, 3 colonnes sur tablette, 2 sur mobile.
2. **11 services + 1 emplacement libre** : fidèle à la capture, sans invention.
3. **Hiérarchie** : les services fréquents en haut, les ressources en bas.
4. **Cellule active** : fond rouge sombre et icône pleine pour montrer l'état courant.
5. **Typographie** : Oswald pour les titres, Inter pour le corps, monospace pour les
   métadonnées.
6. **Contrastes** : texte clair sur fond nuit, focus visible, labels explicites.
7. **Responsive** : sidebar en drawer sous 1024 px, tableaux à défilement interne.
8. **Honnêteté** : badges “démo”, mentions de simulation, aucune donnée officielle
   inventée.

## 6. Architecture des livrables

```text
index.html                       Hub des maquettes et documents
sources/maquettes/               7 écrans HTML
styles/killer-campus.css         Design system unique
scripts/app.js                   Interactions de démonstration
assets/fonts/                    Inter + Oswald
sources/*.md                     Documents de conception
```

### Les 7 écrans

1. **Accueil** — promesse, aperçu du dashboard, parcours candidat.
2. **Connexion** — accès à l'espace étudiant, formulaire de démonstration.
3. **Préinscription** — dossier candidat en 4 étapes.
4. **Tableau de bord étudiant** — grille de services, stats, activité.
5. **Catalogue de tenues** — produits, filtres, panier simulé.
6. **Bibliothèque numérique** — ressources gratuites/payantes, emprunts simulés.
7. **Tableau de bord admin** — utilisateurs, tâches, activité.

## 7. Validation

- 8 pages HTML : hub + 7 maquettes.
- 0 lien local cassé, 0 ID dupliqué, 0 classe CSS manquante.
- **Lighthouse accessibilité : 100/100 sur les 8 pages.**
- Interactions testées : filtres, drawer, menu, mot de passe, toast, formulaire.
- Responsive vérifié : pas de débordement horizontal de page à 375 px.
- Déploiement Vercel public, redéploiement automatique à chaque push sur `main`.

## 8. Limites assumées

- Pas de backend, pas de base de données, pas d'authentification réelle.
- Les candidatures, commandes, paiements et emprunts sont simulés.
- Les noms, chiffres, prix et documents sont fictifs.
- Le nom officiel de l'université pilote reste à confirmer.
- Les états de chargement, d'erreur et de vide ne sont pas tous maquettés.

## 9. Prochaines étapes

1. Valider le nom de l'université et les contenus officiels.
2. Choisir le backend et le modèle de données.
3. Implémenter l'authentification et les rôles.
4. Brancher un paiement en mode test.
5. Tester avec de vrais étudiants et des lecteurs d'écran.
6. Prévoir une version anglaise si le public est multilingue.
7. Ajouter les états de chargement, d'erreur et de succès.

## 10. Liens utiles

- **Démo :** https://killer-campus-design.vercel.app
- **GitHub :** https://github.com/amegandjinluc-cell/killer-campus-design
- **Dashboard Vercel :** https://vercel.com/amegandjin/killer-campus-design
- **Lancer en local :**

```bash
cd killer-campus-design
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000/index.html`.

---

**À retenir pour les collègues :** ce n'est pas un produit fini, c'est une preuve de
conception. Le but est de montrer la direction artistique, la hiérarchie des services,
le design system et les parcours clés avant de passer au développement backend.
