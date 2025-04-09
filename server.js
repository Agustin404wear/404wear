
require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.DOMAIN || '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/pedido', (req, res) => {
  console.log('Pedido recibido:', req.body);
  res.json({ mensaje: '¡Pedido recibido correctamente!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor en http://localhost:' + PORT));
