# 1. Analyse du projet — Killer Campus

## 1.1 Contexte et problème

Un étudiant doit consulter plusieurs services séparés pour suivre sa scolarité :
profil, cours, présences, notes, relevés, examens, événements, emploi du temps,
bibliothèque, circulaires et boutique de tenues. Chaque service possède parfois sa
propre application ou son propre portail, ce qui fragmente l'attention et allonge les
déplacements entre écrans.

**Killer Campus** répond à ce besoin en centralisant ces services dans un tableau de
bord unique, avec un accès direct et une hiérarchie lisible en un seuil de regard.

## 1.2 Objectifs du design

1. **Une porte d'entrée unique** : depuis l'accueil, l'utilisateur repère rapidement
   le service qu'il cherche.
2. **Une hiérarchie claire** : l'élément courant est visible, les actions fréquentes
   sont proches du centre, les actions secondaires sont décalées sans disparaître.
3. **Une composition sobre** : la grille structure la page ; les composants ne se
   chevauchent pas et les écrans ne sont pas surchargés.
4. **Une esthétique reconnaissable** : mode sombre, rouge sang, bleu marine et
   typographie condensée, pour un rendu institutionnel et affirmé.
5. **Une évolutivité** : l'architecture permet d'ajouter une deuxième université,
   de nouveaux services ou de nouveaux rôles sans refaire la charte.

## 1.3 Public cible

- **Étudiant** (principal) : profil, cours, présences, notes, événements,
  bibliothèque, préinscription, boutique.
- **Responsable / administrateur** : gestion de l'instance, utilisateurs, contenus,
  commandes et statistiques.
- **Visiteur / candidat** : page d'accueil, informations générales, préinscription.

## 1.4 Modules du cahier des charges

| Module | Rôle |
|---|---|
| Espace étudiant | Profil, tableau de bord, notifications |
| Préinscription et candidature | Dossier, suivi, finalisation |
| Boutique de tenues | Catalogue, sélection, panier |
| Bibliothèque numérique | Supports PDF gratuits et payants |
| Espace administration | Gestion des instances, utilisateurs, contenus |

## 1.5 Périmètre

- Une **seule université pilote** au départ, avec une évolution possible vers
  plusieurs universités.
- Une interface **moderne, professionnelle, responsive**, avec une navigation simple.
- La **protection des données étudiantes** est une exigence de conception, même si le
  prototype ne traite aucune donnée réelle.
- Les paiements et les candidatures sont **simulés** et ne doivent jamais être
  présentés comme opérationnels.
- Aucune donnée officielle sur l'université ne doit être inventée.

## 1.6 Hors périmètre / à clarifier

- La technologie backend exacte n'est pas imposée.
- Le nom officiel de l'université pilote n'est pas fourni.
- Les obligations réglementaires précises (RGPD, loi sénégalaise sur les données
  personnelles) doivent être validées par la direction ou un conseil juridique.
- Les règles métier de la préinscription (pièces exigées, frais, délais) restent à
  confirmer.

## 1.7 Rôle du designer

- Analyser le cahier des charges et les références visuelles.
- Produire une proposition de conception crédible, digne d'un projet universitaire.
- **Justifier chaque choix de conception.**
- Signaler les informations manquantes au lieu de les inventer.
- Livrer des maquettes navigables et un design system cohérent.
