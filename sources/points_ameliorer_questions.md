# 6. Points à améliorer et questions

## 6.1 Points à améliorer après la première itération

1. **Université pilote** : le nom officiel n'est pas fourni. Les écrans affichent
   « Université pilote — à confirmer » et le champ de sélection reste volontairement
   générique.
2. **Transactions** : la boutique et la bibliothèque simulent l'achat, la commande et
   l'emprunt. Il faudra définir les règles métier, les moyens de paiement et les
   remboursements avant toute mise en production.
3. **Notifications** : les badges sont statiques. Il faudra un service de notifications
   (temps réel ou synchronisation) et une gestion des lus/non-lus.
4. **Accessibilité** : les maquettes respectent les bases (contraste, focus, labels),
   mais il reste à tester avec des lecteurs d'écran, des contrôles clavier complets et
   des personnes en situation de handicap.
5. **Internationalisation** : si le public est multilingue (français, wolof, anglais),
   les libellés et les formats de date doivent être localisables.
6. **Données** : les données sont fictives. Les colonnes, les statuts et les règles de
   validation doivent être définis avec le backend et les services métier.
7. **Performance mobile** : les futurs visuels produits devront être optimisés
   (WebP/AVIF, tailles adaptées) et les polices limitées aux graisses réellement
   utilisées.
8. **Thème** : le mode sombre est un choix assumé. Un thème clair pourra être ajouté
   plus tard si un besoin d'accessibilité ou d'usage en plein soleil est confirmé.
9. **États** : les écrans de chargement, d'erreur, de vide et de succès ne sont pas
   tous maquettés ; ils doivent être spécifiés avant le développement.
10. **Contenus réels** : les textes, prix, noms et documents doivent être remplacés
    par des contenus validés par l'université.

## 6.2 Questions ouvertes

| # | Question | Qui la valide |
|---|---|---|
| 1 | Nom exact de l'université pilote ? | Direction / université |
| 2 | Quelles données officielles afficher dans le tableau de bord (moyenne, présence, événements) ? | Chef de projet / service informatique |
| 3 | Peut-on prévoir une démo de paiement sécurisé (sandbox) pour la boutique ? | Responsable e-commerce / marketing |
| 4 | Comment distinguer précisément les ressources gratuites et payantes de la bibliothèque ? | Bibliothécaire |
| 5 | La préinscription doit-elle gérer plusieurs universités dès le lancement ? | Direction académique |
| 6 | Quels rôles prévoir dans l'administration (super-admin, admin par université, éditeur) ? | Administration |
| 7 | Quelles obligations de protection des données s'appliquent (RGPD, loi sénégalaise) ? | Juridique / CNIL |
| 8 | Faut-il des pages publiques supplémentaires (présentation, contact, FAQ, candidats) ? | Marketing / communication |
| 9 | Quels sont les éléments officiels de la marque (logo, couleurs, typographie) ? | Communication |
| 10 | Quelle est la date cible de mise en production et le budget de développement ? | Direction |

## 6.3 Avis de l'équipe

- La proposition reprend la **grille de services** et la **hiérarchie** de la capture
  Academia, puis applique une esthétique **sombre, rouge sang et typographique**.
- La capture montre 11 services et une cellule vide : le prototype conserve les 11
  services réels et laisse un **emplacement libre** au lieu d'inventer un libellé.
- Tous les choix sont **justifiés** et les informations manquantes sont **signalées**.
- Le niveau de détail correspond à une **preuve de concept de conception** interactive,
  adaptable à n'importe quel backend.
