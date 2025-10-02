const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock kullanıcı listesi
let users = [
  { email: "customer@commerce.com", password: "123456", role: "user" },
  { email: "store@commerce.com", password: "123456", role: "store" },
  { email: "admin@commerce.com", password: "123456", role: "admin" }
];

// Mock kategori listesi
const categories = [
  { id: 1, name: "bags", gender: "women", rating: 4.8, image: "bags.png" },
  { id: 2, name: "belts", gender: "women", rating: 4.6, image: "belts.png" },
  { id: 3, name: "cosmetics", gender: "women", rating: 4.9, image: "/assets/images/categories/cosmetics.png" },
  { id: 4, name: "bags", gender: "men", rating: 4.7, image: "bags.png" },
  { id: 5, name: "hats", gender: "men", rating: 4.5, image: "hats.png" }
];

// Mock ürün listesi
const products = [
  { id: 1, title: "Kadın Çanta", price: 199, image: "bags.png", categoryId: 2 },
  { id: 2, title: "Kemer", price: 149, image: "belts.png", categoryId: 2 },
  { id: 3, title: "Ruj", price: 89, image: "cosmetics.png", categoryId: 3 },
  { id: 4, title: "Şapka", price: 129, image: "hats.png", categoryId: 5 },
  { id: 5, title: "Erkek Çanta", price: 219, image: "bags.png", categoryId: 2 }
];

// Yardımcı fonksiyon: kategori ID'den kategori adını bulma
function getCategoryNameById(id) {
  const category = categories.find(c => c.id === Number(id));
  return category ? category.name : "";
}

// Ürünleri dönen endpoint (ShopPage ile uyumlu)
app.get("/products", (req, res) => {
  const { category, filter, sort } = req.query;
  let result = [...products];

  if (category) {
    result = result.filter(p => p.categoryId === Number(category));
  }

  if (filter) {
    result = result.filter(p =>
      p.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (sort) {
    const [key, direction] = sort.split(":");
    result.sort((a, b) => {
      if (key === "price") {
        return direction === "asc" ? a.price - b.price : b.price - a.price;
      }
      return 0;
    });
  }

  res.status(200).json({
    total: result.length,
    products: result
  });
});

// Signup endpoint
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Eksik bilgi gönderildi" });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const newUser = { email, password, role: getUserRole(email), name };
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

// Login endpoint
app.post("/login", (req, res) => {
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

//Güncellenmiş Token doğrulama endpointi
app.get("/verify", (req, res) => {
  const rawToken = req.headers["authorization"];
  const token = rawToken?.replace("Bearer ", "");

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

// Role ID'ye göre veri dönen endpoint
app.get("/roles/:id", (req, res) => {
  const { id } = req.params;
  const index = parseInt(id, 10) - 1;
  if (index >= 0 && index < users.length) {
    const user = users[index];
    return res.status(200).json({ role: user.role });
  }
  return res.status(404).json({ error: `Role with ID ${id} not found` });
});

// Tüm rollerin listesini dönen endpoint
app.get("/roles", (req, res) => {
  const roles = users.map((user, index) => ({
    id: index + 1,
    email: user.email,
    role: user.role
  }));
  return res.status(200).json({ roles });
});

// Kategori listesini dönen endpoint
app.get("/categories", (req, res) => {
  res.status(200).json(categories);
});

// Ana sayfa isteği varsa 404 yerine yanıt dönsün
app.get("/", (req, res) => {
  res.send("Backend çalışıyor");
});

// Role belirleme fonksiyonu
function getUserRole(email) {
  if (email.includes("admin")) return "admin";
  if (email.includes("store")) return "store";
  return "user";
}

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Backend çalışıyor: http://localhost:${PORT}`);
});

              
 





      
 
