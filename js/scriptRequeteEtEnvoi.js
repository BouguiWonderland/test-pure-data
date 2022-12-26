/**********************************************************************************
 *  scriptRequeteEtEnvoi.js
 * 
 *  Script requêtant une API, puis transférant les informations reçues
 *  au format OSC à travers une connexion UDP
 * 
 **********************************************************************************/

// Import des librairies nécessaires
const clientRest = require("axios");
const OscUdpClient = require("./oscUdpClient");

// Création du client OSC/UDP
const adresseUdp = 'localhost';
const portUdp = 3001;
const oscUdpClient = new OscUdpClient(portUdp, adresseUdp);

/**
 * Options de la requête API, type de méthode et URL
 * Documentation : https://www.programmableweb.com/api/yes-or-no-rest-api
 */
const optionsRequete = {
    method: 'GET',
    url: 'http://yesno.wtf/api/'
};

// Appel à l'API YesOrNo pour avoir une réponse
clientRest.request(optionsRequete).then(function (response) {

  // On loggue le contenu de la réponse de l'API (debug)
  console.debug('Réponse de l\'API: ', response.data);

  // Envoi de la réponse vers PureData en utilisant le client OSC/UDP
  oscUdpClient.envoiMessage('reponse', response.data.answer);

}).catch(function (error) {
  // En cas d'erreur, on la loggue.
	console.error(error);
});
