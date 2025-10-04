const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/*MOCK VERİLER*/

//Ürünler
const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Ürün ${i + 1}`,
  description: `Ürün ${i + 1} açıklaması`,
  price: 100 + i,
  stock: 50 + i,
  store_id: 1,
  category_id: (i % 5) + 1,
  rating: (Math.random() * 2 + 3).toFixed(2),
  sell_count: Math.floor(Math.random() * 500),
  images: [
    {
      url: `https://cdn.dsmcdn.com/ty181/product/media/images/20210923/14/135755138/57457659/1/1_org_zoom.jpg`,
      index: 0,
    },
  ],
}));

//Özel ürün: id 322
products.push({
  id: 322,
  name: "Gri Regular Astar",
  description: "Gri Regular Astar Detaylı Dokuma Blazer Ceket TWOAW20CE0316",
  price: 461.99,
  stock: 140,
  store_id: 1,
  category_id: 3,
  rating: 3.64,
  sell_count: 281,
  images: [
    {
      url: "https://cdn.dsmcdn.com/ty181/product/media/images/20210923/14/135755138/57457659/1/1_org_zoom.jpg",
      index: 0,
    },
  ],
});

//Kullanıcılar
const users = [
  { email: "customer@commerce.com", password: "123456", role: "user" },
  { email: "store@commerce.com", password: "123456", role: "store" },
  { email: "admin@commerce.com", password: "123456", role: "admin" },
];

//Kategoriler
const categories = [
  { id: 1, name: "bags", gender: "women", rating: 4.8, image: "bags.png" },
  { id: 2, name: "belts", gender: "women", rating: 4.6, image: "belts.png" },
  { id: 3, name: "cosmetics", gender: "women", rating: 4.9, image: "cosmetics.png" },
  { id: 4, name: "bags", gender: "men", rating: 4.7, image: "bags.png" },
  { id: 5, name: "hats", gender: "men", rating: 4.5, image: "hats.png" },
];

/*ENDPOINTLER*/

//Ana sayfa testi
app.get("/", (req, res) => {
  res.send("✅ Backend çalışıyor");
});

//Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (u) => u.email === email?.trim() && u.password === password?.trim()
  );

  if (user) {
    res.status(200).json({ message: "Giriş başarılı", role: user.role });
  } else {
    res.status(401).json({ message: "Geçersiz e-posta veya şifre" });
  }
});

//Tüm ürünleri döner (filtreleme + sıralama + sayfalama)
app.get("/products", (req, res) => {
  const { category, filter, sort, limit, offset } = req.query;
  let result = [...products];

  if (category) {
    result = result.filter((p) => p.category_id === Number(category));
  }

  if (filter) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(filter.toLowerCase())
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
    products: paginated,
  });
});

//Belirli ürün detayını döner
app.get("/products/:productId", (req, res) => {
  const productId = Number(req.params.productId);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Ürün bulunamadı" });
  }
});

//Kategorileri döner
app.get("/categories", (req, res) => {
  res.status(200).json(categories);
});

/*SUNUCU BAŞLAT*/

app.listen(PORT, () => {
  console.log(`🚀 Backend çalışıyor: http://localhost:${PORT}`);
});

              
 





      
 
