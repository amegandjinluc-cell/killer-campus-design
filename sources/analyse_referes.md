# 2. Analyse des références visuelles

## 2.1 Capture analysée

- **Fichier** : `references/referee_academia_20261029.jpg`
- **Capture** : `IMG-20261029-WA0012` — écran d'accueil de l'application
  **Academia** (Sénégal), en mode clair.
- **Format observé** : interface mobile, en-tête bleu nuit, fond blanc, grille de
  services iconographique.

## 2.2 Signaux visuels observés

### En-tête

- Barre bleu nuit très sombre, presque noire.
- Titre **Academia** centré, en blanc, typographie grasse et légèrement condensée.
- Menu hamburger à gauche.
- Cloche de notification à droite, avec une pastille rouge portant le chiffre `2`.
- Barre de statut du téléphone au-dessus (heure dans une pilule rouge, réseau,
  batterie).

### Bloc université

- Écusson circulaire centré.
- Nom de l'université sur une ligne, en gris, sous l'écusson :
  « St. Christopher University-Senegal ».
- Le nom exact de l'établissement reste à confirmer : il est repris ici comme
  observation de la capture, pas comme donnée officielle validée.

### Grille de services

La capture montre **3 colonnes et 4 lignes**, soit **11 libellés visibles et une
douzième cellule vide** en bas à droite :

| Ligne | Colonne 1 | Colonne 2 | Colonne 3 |
|---|---|---|---|
| 1 | My Profile | My Courses | Attendance |
| 2 | Fees | Assignments | Exam Result |
| 3 | Event (cellule surlignée) | Timetable | Circulars |
| 4 | Academia Drive | Holiday | *(vide)* |

Chaque cellule associe :

1. une icône linéaire noire, trait épais, sans remplissage ;
2. un libellé court, en noir, sous l'icône ;
3. un espacement généreux entre les lignes.

La cellule **Event** est mise en évidence par un fond lavande très clair. Un bouton
flottant gris, à droite au niveau de la troisième ligne, sert de contrôle de
navigation : ce n'est pas un libellé de service. Le cercle gris qui chevauche
l'icône de **Circulars** est un artefact de l'interface (contrôle flottant), pas une
deuxième icône.

> **Note de méthode** : la douzième cellule est vide sur la capture. Elle n'est pas
> remplie avec un nom inventé. Le prototype la représente comme un « emplacement
> libre » et le brief demande une grille 4×3 sur bureau : cette grille contient donc
> 11 services réels et un slot d'extension.

### Éléments à réutiliser

- Une barre d'en-tête avec identité, navigation et indicateur de notification.
- Une grille de services lisible, fondée sur l'icône et le libellé.
- Des icônes linéaires, monochromes, sans dégradé.
- Une pastille rouge pour l'activité non lue.
- Une hiérarchie simple : en-tête → identité → grille → contenu.

## 2.3 Ce qui est repris

- La **structure de l'en-tête** : marque, navigation, notification.
- La **grille de services** et sa hiérarchie visuelle.
- Le **principe de la cellule active** : un service peut être mis en avant.
- Les **icônes linéaires** et les libellés courts.

## 2.4 Ce qui est remplacé

| Référence | Killer Campus |
|---|---|
| Fond blanc | Fond nuit `#0C0C14`, surfaces `#12121C` |
| En-tête bleu nuit | En-tête sombre, accent rouge |
| Icônes noires | Icônes claires, accent rouge sur les actions |
| Pastille rouge discrète | Rouge sang `#C1121F` comme couleur d'action |
| Typographie neutre | Oswald condensé + Inter lisible |
| Cellules sans bordure | Cartes bordées, survol et états actifs |

## 2.5 Ce qui n'a pas été inventé

- Le **nom officiel de l'université pilote** : la capture donne un nom observé, mais
  il n'est pas validé comme donnée officielle du projet. Les écrans affichent
  « Université pilote — à confirmer ».
- La **douzième cellule** : elle est vide dans la capture ; elle reste un emplacement
  libre dans la maquette.
- Les **chiffres, prix, documents et utilisateurs** : ils sont fictifs et signalés
  comme données de démonstration.
- Les **deux libellés tronqués** parfois évoqués dans une première lecture : après
  vérification de l'image, il n'y a pas deux libellés tronqués. La grille contient
  11 libellés lisibles et une cellule vide.
