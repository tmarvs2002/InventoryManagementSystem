import CryptoJS from 'crypto-js';


function toString(words: CryptoJS.lib.WordArray) {
    const asString = CryptoJS.enc.Utf8.stringify(words);
    try {
        return JSON.parse(asString)
    } catch (err) {
        return asString;
    }
}

const password = process.env.ENCRYPT_KEY || '';
const salt = process.env.ENCRYPT_SALT || '';
const key = CryptoJS.PBKDF2(password, salt, { keySize: 16, iterations: 128 });
const iv1 = CryptoJS.lib.WordArray.create(key.words.slice(0,16))

class Crypto {

    encrypt(plainText: string): string {
        const encrypted = CryptoJS.AES.encrypt(plainText, key, {
            keySize: 16,
            iv: iv1,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });

        return encrypted.toString();
    }
    
    decrypt(cipher: string): any {
        const plainText = CryptoJS.AES.decrypt(cipher, key, {
            keySize: 16,
            iv: iv1,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
    
        return toString(plainText);
    }
}

export const crypto = new Crypto();