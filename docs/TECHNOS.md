# Les techno. utilisées pour notre API

## Création d'une application avec Node.js

Nous avons initialisé notre application avec **Node.js** :
Le fichier package.json :
**bcryptjs** : gestion des mots de passe,
**body-parser** : middleware pour le traitement des requêtes (ex. request.body),
**cors** : middleware pour gérer le "partage" de données entre plusieurs adresses http (ex. une api ouvre son accès à d'autres sites internet),
**dotenv** : module qui permet le chargement de "variables" d'environement,
**express** : framework pour **node.js** fournissant un ensemble robuste de fonctionnalités pour développer des applications Web et mobiles,
- Permet de configurer des middlewares pour répondre aux requêtes HTTP.
- Définit une table de routage qui est utilisée pour effectuer différentes actions basées sur la méthode HTTP et l'URL.
- Permet de rendre dynamiquement les pages HTML en passant des arguments aux modèles.

**joi** : le langage de description de schéma et le validateur de données le plus puissant pour JavaScript,
**jsonwebtoken** : Un JWT est un objet JSON encodé qu'un serveur (Node par exemple) encode en utilisant une clé privée. ... Ledit client l'enverra ensuite au serveur à chaque requête faite à ce même serveur,
**pg** : client PostgreSQL pour **node.js** c'est un système de gestion de base de données relationnelle objet (SGBDRO).


``` js
npm init -y
npm i express pg cors dotenv jsonwebtoken bcryptjs 
```

## Setup Express web server

Au premier niveau de notre projet nous créons un fichier "**app.js**" comme cela :

``` js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./app/routers');

const app = express();

app.use(cors("*"));
const bodyParser = multer();
app.use(bodyParser.none());
app.use(express.urlencoded({ extended: true }))
app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log('API is ready on :', process.env.PORT);
});
```
### Problèmes rencontrés
Nous devions utiliser "**Multer**" pour pouvoir uploader des images et les stocker sur le serveur de notre API. (cela explique le fait que nous ayons cette ligne "**const bodyParser = multer();**" pour la gestion du bodyparser). Nous utiliserons notre application dans l'état.

*Nous faisons nos essais en local, pendant la journée et j’apprends grâce au canal “entraide-data” dans le slack d’O’clock, => **Maxime** : "Attention mauvais plan d'upload sur Heroku ! Si le dynos sur lequel est votre code redémarre (ce qui arrive en général au moins une fois par jour) vous pouvez perdre tous les fichiers uploadé !”
à mince, mais on fait comment alors ? 
“j'ai vu que le service S3 permettait les uploads : une fois qu'il est prêt, il y a la méthodo sur heroku pour faire le lien. mais bon on verra demain”
=> **Maxime** “Exactement quand on utilise Heroku on préfère upload vers un S3. Au traitement de la requête dans le back, on peut en faire une pour transférer le fichier vers S3.
=> **Maxime** Après si c'est juste les photos de profil, je vous recommande de jeter un oeil à gravatar”*.

Après avoir eu ces infos, nous devons changer notre fusil d'épaule, on ne peut plus utiliser Multer côté "Back", c'est pour cette raison que nous demandons à l'équipe "Front" de s'orienter vers "Firebase".
*toujours dans le canal “entraide-data” du slack d’O’clock : Bon les copains, pour les photos, Kamil a trouvé la soluce sur Firebase. Pour plus de questions, il faut aller le voir.*


## Lancer le serveur Web

Dans package.json file, nous créons des scripts de démarrage comme cela :

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
},
```
# SQITCH

Notre schéma de base de données à plus ou moins les même contrainte que notre code.
A partir du moment ou il existe plusieurs serveur qui ont notre schéma (par ex: les machines des dev + la machine de prod) on a besoin d'utiliser un outil qui va gérer l'évolution du schéma.
On utilisera `sqitch`.
Bien sur il faudra l'installer sur notre machine.

## Lancement du projet

Pour commencer à utiliser `sqitch` sur mon projet j'utilise la commande
```bash
sqitch init nom_projet --engine pg
```
Sqitch est une application de gestion des modifications de bases de données. Les modifications sont implémentées sous forme de scripts natifs du moteur de base de données sélectionné. Vous écrivez une application PostgreSQL ? Écrivez des scripts SQL pour psql. Pour résumer, cette aplication permet un développement itératif de nos schémas de base de données et ils peuvent être "déployés" sur n'importe quelles machines.

### Notre API est installée sur un serveur Heroku
Voici le lien https://dashboard.heroku.com/apps/api-happy-news
Associé à notre serveur Heroku, nous avons également un serveur Postgres (c'est grace à l'application sqitch que nous pouvons déployer notre BDD sur celui-ci) https://data.heroku.com/datastores/6f98fd20-5bee-4950-a96b-704d54d46eb6