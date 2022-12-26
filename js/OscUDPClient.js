/**********************************************************************************
 *  OscUdpClient.js
 * 
 *  Client pour transférer des données OSC à travers une connexion UDP
 * 
 **********************************************************************************/

// Import des librairies nécessaires
const dgram = require('dgram')
const OSC = require('osc-js')

class OscUdpClient {  

  // Constructeur
  constructor(port, address='localhost') {
    this.port = port;
    this.address = address;
  }

  /**
   * Méthode d'envoi de message dans la socket UDP
   * @param chemin chemin OSC du message à envoyer
   * @param valeur valeur du message à envoyer 
   */
  envoiMessage(chemin, valeur) {

    // Initialisation de la socket
    const socket = dgram.createSocket('udp4');

    // Création du message OSC
    const message = new OSC.Message('/' + chemin, valeur);

    // On loggue le contenu du message OSC que l'on envoie (debug)
    console.debug('Envoi du message OSC: ', message);

    // Transformation en binaire du message
    const binary = message.pack();

    // Envoi du message dans la socket
    socket.send(new Buffer.from(binary), 0, binary.byteLength, this.port, this.address,() => {
      // Fermeture de la socket une fois le message envoyé
      socket.close();
    });
  }

}

module.exports = OscUdpClient;