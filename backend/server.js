const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock veri: 50 ürün
const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Ürün ${i + 1}`,
  price: 100 + i,
  image: `product${i + 1}.png`,
  categoryId: (i % 5) + 1
}));

// Mock kullanıcılar
let users = [
  { email: "customer@commerce.com", password: "123456", role: "user" },
  { email: "store@commerce.com", password: "123456", role: "store" },
  { email: "admin@commerce.com", password: "123456", role: "admin" }
];

// Kategoriler
const categories = [
  { id: 1, name: "bags", gender: "women", rating: 4.8, image: "bags.png" },
  { id: 2, name: "belts", gender: "women", rating: 4.6, image: "belts.png" },
  { id: 3, name: "cosmetics", gender: "women", rating: 4.9, image: "cosmetics.png" },
  { id: 4, name: "bags", gender: "men", rating: 4.7, image: "bags.png" },
  { id: 5, name: "hats", gender: "men", rating: 4.5, image: "hats.png" }
];

//Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u =>
  u.email === email?.trim() && u.password === password?.trim()
);

  if (user) {
    res.status(200).json({ message: "Giriş başarılı", role: user.role });
  } else {
    res.status(401).json({ message: "Geçersiz e-posta veya şifre" });
  }
});

//Ürünleri dönen endpoint (filtreleme + sıralama + sayfalama)
app.get("/products", (req, res) => {
  const { category, filter, sort, limit, offset } = req.query;
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

  const lim = parseInt(limit) || 25;
  const off = parseInt(offset) || 0;
  const paginated = result.slice(off, off + lim);

  res.status(200).json({
    total: result.length,
    products: paginated
  });
});

//Ana sayfa
app.get("/", (req, res) => {
  res.send("Backend çalışıyor");
});

app.listen(PORT, () => {
  console.log(`Backend çalışıyor: http://localhost:${PORT}`);
});

              
 





      
 
