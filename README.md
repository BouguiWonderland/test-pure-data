# README - Projet NodeJs/Pure Data

Pour faire tourner le projet, il faut d'abord réaliser l'instalaltion suivante :
- se placer à la racine du répertoire, et lancer `npm install`

Ensuite, il faut ouvrir le patch Pure Data `pd/oscServer.pd`.

Enfin, il vous faut lancer le script `js/scriptRequeteEtEnvoi.js`, avec la commande suivante : 
`node js/scriptRequeteEtEnvoi.js`

Le comportement attendu est que :
- le script loggue la réponse de l'API
- le script loggue le message OSC envoyé vers Pure Data
- le message OSC (la réponse de l'API : yes/no/maybe) est loggué dans la console Pure Data
