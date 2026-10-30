# 4. Architecture des pages

## 4.1 Organisation générale

Killer Campus est un **site multi-pages statique**. Chaque écran correspond à une
intention d'usage claire, plutôt qu'à une fonction technique isolée.

| Type | Accès | Écrans |
|---|---|---|
| **Public** | Sans connexion | Accueil, connexion, préinscription |
| **Étudiant** | Authentifié | Tableau de bord, catalogue, bibliothèque |
| **Administration** | Authentifié + rôle admin | Tableau de bord admin |

Le prototype ne gère pas réellement l'authentification : les écrans privés sont
accessibles directement pour la revue.

## 4.2 Navigation

### Topbar publique

Structure héritée de la référence, transposée en mode sombre :

- **Marque** à gauche : monogramme `KC`, nom « Killer Campus », sous-titre.
- **Navigation centrale** : Accueil, Services, Préinscription, Boutique,
  Bibliothèque, Admin.
- **Actions** à droite : connexion, inscription, menu mobile.
- **Indicateur de notification** et **avatar** dans l'espace connecté.

### Sidebar de l'espace connecté

Sur bureau, une barre latérale fixe regroupe :

1. **Vue d'ensemble** : tableau de bord, cours, notes, présences.
2. **Ressources** : bibliothèque, boutique, préinscription.
3. **Compte** : profil, administration, déconnexion.

Sur tablette et mobile, la sidebar devient un **drawer** ouvert par le bouton menu.
Le voile et la touche `Échap` ferment le drawer.

### Hiérarchie de navigation

1. **Section** (ex. Espace étudiant).
2. **Sous-section / action** (ex. Tableau de bord, Bibliothèque).
3. **État courant** : lien actif avec fond rouge sombre, bordure ou barre latérale.

## 4.3 Structure du tableau de bord étudiant

Le tableau de bord est la page principale. Il se compose de :

1. **Barre supérieure** : menu, fil d'Ariane, recherche, notifications, avatar.
2. **En-tête de page** : titre, sous-titre, actions secondaires.
3. **Bandeau de bienvenue** : message contextuel et accès rapide.
4. **Statistiques** : cours, présence, moyenne, événements.
5. **Grille de services 4×3** : 11 services + 1 emplacement libre.
6. **Activité récente**, **prochains événements** et **progression**.

### Hiérarchie des services

- Les services **fréquents** (profil, cours, présences, frais) sont en haut.
- Les services **de suivi** (devoirs, résultats, événements, emploi du temps) suivent.
- Les services **de ressources** (circulaires, drive, vacances) terminent la grille.
- La cellule active est mise en avant par un fond rouge sombre et une icône pleine.

## 4.4 Pages publiques et privées

| Page | Type | Accès |
|---|---|---|
| Accueil | Publique | Tout le monde |
| Connexion | Publique | Tout le monde |
| Préinscription | Publique (ou étudiant) | Candidat / étudiant |
| Tableau de bord étudiant | Privé | Étudiant authentifié |
| Catalogue de tenues | Privé (ou public) | Étudiant / visiteur |
| Bibliothèque numérique | Privé | Étudiant authentifié |
| Tableau de bord admin | Privé | Administrateur |

## 4.5 Architecture détaillée des pages

### 4.5.1 Accueil

- **Accroche** : titre, sous-titre, promesse de centralisation.
- **Aperçu** : mini-tableau de bord dans une fenêtre de navigateur.
- **Points d'intérêt** : grille unique, seuil de regard, confidentialité.
- **Parcours candidat** : trois étapes.
- **CTA** : accéder à l'espace, devenir candidat.
- **Mention** : prototype, aucune donnée réelle.

### 4.5.2 Connexion

- **Champs** : email, mot de passe, case « se souvenir de moi ».
- **Actions** : connexion, mot de passe oublié, création de dossier.
- **États** : focus, erreur, chargement (à implémenter côté backend).
- **Sécurité** : aucune donnée n'est envoyée dans la maquette.

### 4.5.3 Tableau de bord étudiant

- **Statistiques** : cours en cours, présence, moyenne, événements.
- **Grille de services 4×3** : 11 services réels + 1 slot libre.
- **Activité récente** : trois événements.
- **Prochains événements** : deux dates.
- **Progression** : semestre, crédits, dossier de stage.

### 4.5.4 Préinscription

- **Identité** : prénom, nom, email, téléphone.
- **Formation** : université pilote (à confirmer), filière, niveau, promotion,
  motivation.
- **Documents** : photo, relevé de notes, pièce d'identité.
- **Suivi** : stepper en quatre étapes.
- **Récapitulatif** : candidat, formation, université, documents, frais.
- **Actions** : enregistrer le brouillon, continuer.
- **Limite** : upload et envoi simulés.

### 4.5.5 Catalogue de tenues

- **Filtres** : tout, polos, sweats, accessoires, tenues.
- **Grille** : six produits avec visuel générique, nom, prix, actions.
- **Panier** : deux articles, sous-total, bouton de commande simulé.
- **Détail produit** : non implémenté, signalé par un toast.
- **Limite** : prix, stocks et paiement fictifs.

### 4.5.6 Bibliothèque numérique

- **Sélection à la une** : support mis en avant.
- **Filtres** : gratuit, payant, informatique, gestion, droit.
- **Grille** : huit ressources avec couverture, titre, résumé, prix, action.
- **Emprunts** : deux emprunts actifs et note d'accès.
- **Limite** : lecture, téléchargement et achat simulés.

### 4.5.7 Tableau de bord administrateur

- **Statistiques** : étudiants, candidatures, commandes, ressources.
- **Tableau des utilisateurs** : nom, filière, statut, date, action.
- **À traiter** : candidatures, commandes, publications.
- **Actions rapides** : ajouter une université, publier, exporter.
- **Graphique** : activité mensuelle de démonstration.
- **Limite** : données administratives fictives.

## 4.6 États de chargement et d'erreur

- **Chargement** : squelettes ou spinner rouge, sans blocage de la navigation.
- **Erreur** : message clair, pas de détail technique, bouton de réessai.
- **Vide** : explication et action proposée (ex. « Aucun emprunt »).
- **404** : page introuvable avec retour à l'accueil.
- **Hors ligne** : les écrans restent consultables, les actions sont désactivées.

Ces états ne sont pas tous maquettés dans le prototype ; ils sont documentés pour la
phase de développement.
