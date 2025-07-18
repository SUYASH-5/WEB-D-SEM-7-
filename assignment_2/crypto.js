const crypto = require('crypto');

function hashExample() {
  const data = 'Hello, Suyash!';
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  console.log('SHA-256 Hash:', hash);
}

function hmacExample() {
  const secret = 'my_secret_key';
  const message = 'Important message';
  const hmac = crypto.createHmac('sha256', secret).update(message).digest('hex');
  console.log('HMAC:', hmac);
}

function symmetricEncryptionExample() {
  const algorithm = 'aes-256-cbc';
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update('Secret data', 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  console.log('Encrypted (AES):', encrypted);
  console.log('Decrypted (AES):', decrypted);
}

function asymmetricKeyExample() {
  const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
  });

  const data = 'Important message';

  const sign = crypto.createSign('sha256').update(data).end();
  const signature = sign.sign(privateKey, 'hex');

  const verify = crypto.createVerify('sha256').update(data).end();
  const isVerified = verify.verify(publicKey, signature, 'hex');

  console.log('Signature Verified:', isVerified);
}

function randomBytesExample() {
  const token = crypto.randomBytes(16).toString('hex');
  console.log('Random Token:', token);
}

function checkPrimeExample() {
  const number = Buffer.from([5]); 

  crypto.checkPrime(number, (err, result) => {
    if (err) {
      console.error("Error checking prime:", err);
      return;
    }
    console.log(`Is prime: ${result}`); // true
  });
}

function pbkdf2Example() {
  const password = 'super_secret';
  const salt = crypto.randomBytes(16);
  crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log('Derived Key (PBKDF2):', derivedKey.toString('hex'));
  });
}

function keyObjectExample() {
  const key = crypto.createSecretKey(Buffer.from('a_secure_key_1234567890123456'));
  console.log('KeyObject Export:', key.export().toString('hex'));
}

hashExample();
hmacExample();
symmetricEncryptionExample();
asymmetricKeyExample();
randomBytesExample();
checkPrimeExample();
pbkdf2Example();
keyObjectExample();
