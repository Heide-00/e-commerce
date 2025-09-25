const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // JSON body'leri alabilmek için

// Mock kullanıcı listesi
let users = [
  { email: "customer@commerce.com", password: "123456", role: "user" },
  { email: "store@commerce.com", password: "123456", role: "store" },
  { email: "admin@commerce.com", password: "123456", role: "admin" }
];

// Role belirleme fonksiyonu
function getUserRole(email) {
  if (email.includes("admin")) return "admin";
  if (email.includes("store")) return "store";
  return "user";
}

// Signup endpoint
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Signup verisi:", req.body);

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const newUser = {
    email,
    password,
    role: getUserRole(email),
    name
  };

  users.push(newUser);

  return res.status(201).json({
    token: "mock-token-123",
    user: {
      id: users.length,
      email,
      name,
      role: newUser.role
    }
  });
});

//Login endpoint
app.post("/login", (req, res) => {
  console.log("Login verisi:", req.body);

  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    return res.status(200).json({
      token: "mock-token-123",
      user: {
        id: users.indexOf(user) + 1,
        email: user.email,
        name: user.name || email.split("@")[0],
        role: user.role
      }
    });
  }

  return res.status(401).json({ error: "Giriş başarısız" });
});

// Token doğrulama endpointi
app.get("/verify", (req, res) => {
  const token = req.headers["authorization"];
  console.log("Verify token:", token);

  if (token === "mock-token-123") {
    const user = users[0]; 
    return res.status(200).json({
      user: {
        id: 1,
        email: user.email,
        name: user.name || user.email.split("@")[0],
        role: user.role
      }
    });
  }

  return res.status(401).json({ error: "Token geçersiz" });
});

//Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Backend çalışıyor: http://localhost:${PORT}`);
});