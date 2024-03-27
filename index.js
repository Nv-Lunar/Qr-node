const express = require('express');
const path = require('path');
const qrcode = require('qrcode');
const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/Generate-Qr', async(req, res) => {
  try {
    const {url} = req.body;
    const GenerateQr = await qrcode.toDataURL(url);
    res.send(`<img src="${GenerateQr}" alt="QR Code">`); 
  } catch (error) {
    res.status(400).send('Eror')
  }
})

app.listen(port, () => {
  console.log('port = ' + port);
})