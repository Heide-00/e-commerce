const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock kullanıcı listesi
const validUsers = [
  'customer@commerce.com',
  'store@commerce.com',
  'admin@commerce.com'
];

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Basit doğrulama
  const isValidUser = validUsers.includes(email);
  const isValidPassword = password === '123456';

  if (isValidUser && isValidPassword) {
    const user = {
      id: validUsers.indexOf(email) + 1,
      email,
      name: email.split('@')[0],
      role: getUserRole(email)
    };

    return res.status(200).json({
      token: 'mock-token-123',
      user
    });
  }

  return res.status(401).json({ error: 'Giriş başarısız' });
});

// Role belirleme fonksiyonu
function getUserRole(email) {
  if (email.includes('admin')) return 'admin';
  if (email.includes('store')) return 'store';
  return 'user';
}

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`✅ Backend çalışıyor: http://localhost:${PORT}`);
});