const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (reverse = false) {
    this.reverse = reverse;
  }
  

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    // Repeat the key to match the length of the message
    const repeatedKey = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      
      if (char >= 'A' && char <= 'Z') {
        const messageCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = repeatedKey[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        
        const encryptedCharCode = (messageCharCode + keyCharCode) % 26 + 'A'.charCodeAt(0);
        result += String.fromCharCode(encryptedCharCode);

        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    // Repeat the key to match the length of the message
    const repeatedKey = key.repeat(Math.ceil(encryptedMessage.length / key.length)).toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i].toUpperCase();
      
      if (char >= 'A' && char <= 'Z') {
        const encryptedCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = repeatedKey[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        
        const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26 + 'A'.charCodeAt(0);
        result += String.fromCharCode(decryptedCharCode);

        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
