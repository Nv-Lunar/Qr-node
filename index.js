const QRCode = require('qrcode');
// const fs = require('fs');

async function generateQRCode(link, filename) {
  try {
    await QRCode.toFile(filename, link);
    console.log('QR code generated successfully.');
  } catch (error) {
    console.error('Failed to generate QR code:', error);
  }
}

let link = 'https://music.youtube.com/watch?v=2u2Z07ujyD8&list=RDAMVM2u2Z07ujyD8';
const filename = 'qrcode.png';

generateQRCode(link, filename);