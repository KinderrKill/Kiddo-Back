# Kiddo Backend

Ce dépôt contient la partie backend de l'application Kiddo, réalisée avec Node.js, Express, MongoDB, GraphQL et Apollo.
Il est responsable de la gestion des fonctionnalités liées aux rencontres entre parents et à l'organisation d'activités.

## Fonctionnalités

- Gestion des utilisateurs : inscription, connexion et gestion du profil.
- Création, consultation et modification d'annonces pour organiser des rencontres.
- Communication entre les utilisateurs via des messages publics.
- Recherche d'activités et de rencontres basée sur la proximité géographique.
- Sécurisation de la connexion et des échanges de données sensibles.

## Prérequis

- Node.js et npm (ou yarn) doivent être installés localement.
- Une base de données MongoDB doit être disponible.

## Instructions d'installation et de configuration

1. Clonez ou téléchargez ce dépôt sur votre machine locale.
2. Dans le répertoire du projet, exécutez la commande `npm install` (ou `yarn install`) pour installer les dépendances.
3. Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement nécessaires, notamment les informations de connexion à la base de données.
4. Exécutez la commande `npm start` (ou `yarn start`) pour démarrer le serveur backend.
5. Vérifiez que le serveur est en cours d'exécution en accédant à `http://localhost:3000` dans votre navigateur ou en utilisant un outil de test d'API comme Postman.

## Structure du projet

- `/src` : Contient les fichiers source du backend.
  - `/config` : Modèles de données MongoDB et GraphQL.
        - `/graphql` : Résolveurs GraphQL pour gérer les requêtes et les mutations..
        - `/mongo` : Définition des schémas et logique Mongo.
  - `/middlewares` : Intercepteur et vérification supplémentaire lors des actions.
  - `/utils` : Utilitaires et fonctions auxiliaires.

## Contribution

Les contributions à ce projet sont les bienvenues. Si vous souhaitez apporter des améliorations, veuillez suivre ces étapes :

1. Fork du projet.
2. Créez une branche pour vos fonctionnalités (`git checkout -b feature/AmazingFeature`).
3. Committez vos modifications (`git commit -m 'Ajouter une fonctionnalité incroyable'`).
4. Pushez vers la branche principale (`git push origin feature/AmazingFeature`).
5. Ouvrez une pull request.

## Auteur

Ce projet a été réalisé par [E-Code](https://github.com/KinderrKill).

## Remarques

- C'est à la base un projet de fin de formation, celui-ci bien que fait en groupe à été repris à 90% par mes soins et une V2 est dans les tiroirs avec les technologies de Next et Nest.
- La sécurité a été une priorité lors de la mise en place de la connexion et des échanges de données sensibles.
