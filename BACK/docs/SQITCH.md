# SQITCH

Notre schéma de base de données à plus ou moins les même contrainte que notre code.

A partir du moment ou il existe plusieurs serveur qui ont notre schéma (par ex: les machines des dev + la machine de prod) on a besoin d'utiliser un outil qui va gérer l'évolution du schéma.

On utilisera `sqitch`.


## Lancement du projet

Pour commencer à utiliser `sqitch` sur mon projet j'utilise la commande
```bash
sqitch init nom_projet --engine pg
```

Cela va me créer 3 dossiers et 2 fichiers

- **sqitch.conf** : ce fichier contiendra la configuration de l'outil (ex répertoire à utiliser)  et les serveurs de destination
- **sqitch.plan** : On aura ici la liste des migrations a effectuer dans l'ordre
- **deploy/** : Ce dossier contiendra les scripts SQL de migration
- **revert/** : Celui ci les scripts pour annuler une migration (revenir en arrière)
- **verify/** : On pourra écrire ici quelques tests pour vérifier nos migrations

### Un mot sur les `target`

Dans sqitch on appelle target un serveur cible et on utilise une syntaxe proche
de `PG_URL` du module `pg` de npm.

Par ex: `db:pg:user:password@host:port/database`.

Sauf que avec notre configuration on peut enlever `user:password`.

S'ils ne sont pas précisé `host:port` auront pour valeur par défaut : `localhost:5432`.

Au final en dev on précisera surtout la base de données :
`db:pg:ocolis_sqitch`


## Ajouter des migrations

Si je veux créer une migration pour faire évoluer mon schéma de bdd :
```bash
sqitch add nom_migration -n "Description de la migration"
```

Cela va me créer un fichier `nom_migration.sql` dans chacun des dossiers `deploy`, `revert` et `verify` et rajouter une ligne dans le `sqitch.plan`.

Il peut être intéréssant de faire commencer `nom_migration` par un nombre (histoire que dans mon dossier les fichiers soit dans l'ordre de migration), on peut aussi laisser des espaces au cas où on voudrait rajouter des éléments entre.
Ex :
1. 10-init
2. 20-serial_text
3. ...

## Les verify

Les fichiers dans le dossiers verify sont des "tests unitaires".

L'idée c'est d'écrire des commandes qui ne marcheront que si la migration est bien déployé.

Par exemple vérifier qu'on peut bien toujours insérer un code postal dans la colonne dont on vient de changer les contraintes d'intégrité, ou que l'on peut toujours faire un INSERT INTO dans la table sur laquelle j'ai rajouté des NOT NULL.

Pour tester nos verify on utilise la commande :
```bash
sqitch verify target
```

## Les deploy (appliquer les migrations sur une target)

```bash
sqitch deploy target
```

Cette commande appliquera toutes les migrations nécéssaire pour mettre à jour notre target.

Si l'on veut que les migrations soient systématiquement testé on doit faire (une fois par porjet) :
```bash
sqitch config --bool deploy.verify true
```

## Revert (annuler une ou plusieurs migrations)

```bash
sqitch revert target
```

Annule toutes les migrations

```bash
sqitch revert target --to nom_migration
```

Annule toutes les migrations jusqu'à `nom_migration` (notre schéma est alors dans l'état après l'application de la migration `nom_migration`).