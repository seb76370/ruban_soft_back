## 18/01/2023

## Table Content

1. Informations Générales
2. Langage et Package
3. installation

## Informations Générales

Le but de ce projet est de créer les API permettant la gestion des BDD 
Pour la sociète Ruban Soft

### Langage et Package

- NodeJS
- NESTJS
- Bcrypt
- JWT

## Installation

---

Petite intro installation

```
$ Creation d 'un répertoire dans le server Web "RubanSoft Back"
$ git clone https://github.com/seb76370/ruban_soft_back.git
$ npm install
$ creation d'un fichier .env a racine du projet
APPPORT = ""
HOST = ""
PORT_BDD = ""
USERNAME_BDD = ""
PASSWORD = ""
DATABASE = ""
TOKEN_SECRET = ""
EXPIRE_IN = ""
```

**Warning**
Dans le fichier typeorm.config.ts
le parametre "socketPath: Sock" de la variable typeOrmConfig est spécifique a
mon server Nginx/mariaDB
ex: pour un server exmple il faudra le commenter

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
