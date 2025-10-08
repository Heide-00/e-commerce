const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;
const SECRET_KEY = "commerce_secret";

app.use(cors());
app.use(express.json());

/*MOCK VERİLER*/
const users = [
  { email: "customer@commerce.com", password: "123456", role: "user" },
  { email: "store@commerce.com", password: "123456", role: "store" },
  { email: "admin@commerce.com", password: "123456", role: "admin" },
];

let savedCards = [
  {
    id: "1",
    card_no: "1234123412341234",
    expire_month: 12,
    expire_year: 2025,
    name_on_card: "Ali Baş"
  }
];

/*TOKEN DOĞRULAMA*/
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "Token eksik" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Token formatı hatalı" });
  }

  const token = parts[1];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(403).json({ message: "Token süresi doldu" });
      }
      return res.status(403).json({ message: "Token geçersiz" });
    }
    req.user = user;
    next();
  });
}

/*LOGIN*/
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (u) => u.email === email?.trim() && u.password === password?.trim()
  );

  if (user) {
    const token = jwt.sign(
      { email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Giriş başarılı", token, role: user.role });
  } else {
    res.status(401).json({ message: "Geçersiz e-posta veya şifre" });
  }
});

/*KART İŞLEMLERİ*/

//Kart Ekleme
app.post("/user/card", verifyToken, (req, res) => {
  const { card_no, expire_month, expire_year, name_on_card } = req.body;

  if (!card_no || !expire_month || !expire_year || !name_on_card) {
    return res.status(400).json({ message: "Eksik kart bilgisi" });
  }

  const newCard = {
    id: Date.now().toString(),
    card_no,
    expire_month,
    expire_year,
    name_on_card
  };

  savedCards.push(newCard);
  res.status(200).json({ message: "Kart başarıyla kaydedildi", card: newCard });
});

//Kartları Listeleme
app.get("/user/card", verifyToken, (req, res) => {
  res.status(200).json(savedCards);
});

//Kart Güncelleme
app.put("/user/card", verifyToken, (req, res) => {
  const { id, card_no, expire_month, expire_year, name_on_card } = req.body;

  if (!id || !card_no || !expire_month || !expire_year || !name_on_card) {
    return res.status(400).json({ message: "Eksik kart bilgisi" });
  }

  const index = savedCards.findIndex(card => card.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Kart bulunamadı" });
  }

  savedCards[index] = {
    ...savedCards[index],
    card_no,
    expire_month,
    expire_year,
    name_on_card
  };

  res.status(200).json({ message: "Kart başarıyla güncellendi", card: savedCards[index] });
});

//Kart Silme
app.delete("/user/card/:cardId", verifyToken, (req, res) => {
  const { cardId } = req.params;

  const index = savedCards.findIndex(card => card.id === cardId);
  if (index === -1) {
    return res.status(404).json({ message: "Kart bulunamadı" });
  }

  savedCards.splice(index, 1);
  res.status(200).json({ message: `Kart ${cardId} başarıyla silindi` });
});

/*SİPARİŞ İŞLEMLERİ*/

//Sipariş Oluşturma
app.post("/order", verifyToken, (req, res) => {
  const {
    address_id,
    order_date,
    card_no,
    card_name,
    card_expire_month,
    card_expire_year,
    card_ccv,
    price,
    products
  } = req.body;

  if (
    !address_id || !order_date || !card_no || !card_name ||
    !card_expire_month || !card_expire_year || !card_ccv ||
    !price || !products || !Array.isArray(products)
  ) {
    return res.status(400).json({ message: "Eksik sipariş bilgisi" });
  }

  const newOrder = {
    id: Date.now().toString(),
    user: req.user.email,
    address_id,
    order_date,
    card_no,
    card_name,
    card_expire_month,
    card_expire_year,
    card_ccv,
    price,
    products
  };

  console.log("Yeni sipariş:", newOrder);

  return res.status(200).json({ message: "Sipariş başarıyla oluşturuldu", order: newOrder });
});

/*SUNUCUYU BAŞLAT*/
app.listen(PORT, () => {
  console.log(`Backend çalışıyor: http://localhost:${PORT}`);
});


              
 





      
 
