# Calculatrice Web

## Description
Cette application est une calculatrice web simple construite avec HTML, CSS et JavaScript. Elle permet d'effectuer des opérations de base comme l'addition, la soustraction, la multiplication et la division.

## Fonctionnalités
- Addition
- Soustraction
- Multiplication
- Division

## Prérequis
- [Node.js](https://nodejs.org/en/download/) (version 14 ou plus récente)
- [Docker](https://www.docker.com/products/docker-desktop)
- Un compte [Docker Hub](https://hub.docker.com/)

## Installation

# Clonez le dépôt sur votre machine locale:
```sh
git clone https://github.com/MGKAT/Calculatrice_DevOps.git
cd Calculatrice_DevOps
```

# Installez les dépendances Node.js:
```sh
npm install
```

# Exécution des Tests
```sh
npm test
```

# Construire l'Image Docker

Assurez-vous d'être dans le répertoire du projet et exécutez la commande suivante pour construire l'image Docker:
```sh
docker build -t calculatrice-web .
```

# Exécution de l'Application avec Docker
```sh
docker run -d -p 8080:80 calculatrice-web
```
L'application est accessible à l'adresse http://localhost:8080.

## Pipeline CI/CD avec GitHub Actions

# Configuration

Le fichier de pipeline CI/CD ci-cd.yml est situé dans le répertoire .github/workflows. Ce pipeline exécute les étapes suivantes à chaque push sur la branche main:

- Vérification du code source
- Installation des dépendances
- Exécution des tests
- Construction de l'image Docker
- Connexion à Docker Hub
- Poussée de l'image Docker sur Docker Hub