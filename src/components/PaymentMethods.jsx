import { useState, useEffect } from 'react';
import PaymentOptions from './PaymentOptions';
import SavedCardList from './SavedCardList';
import AddCardForm from './AddCardForm';
import InstallmentOptions from './InstallmentOptions';
import axios from 'axios';

export default function PaymentMethods({ cartTotal = 8499.99, cartItems = [], token }) {
  const [paymentType, setPaymentType] = useState('card');
  const [refreshCards, setRefreshCards] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedInstallment, setSelectedInstallment] = useState(1);
  const [savedCards, setSavedCards] = useState([]);
  const [enteredCcv, setEnteredCcv] = useState('');
  const [selectedAddressId, setSelectedAddressId] = useState(1); //örnek adres ID

  //Kartları çek
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/card", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSavedCards(response.data);
      } catch (error) {
        console.error("Kartlar alınamadı:", error);
      }
    };
    fetchCards();
  }, [refreshCards, token]);

  //Siparişi gönder
  const handleOrderSubmit = async () => {
    const selectedCard = savedCards.find(card => card.id === selectedCardId);
    if (!selectedCard || !enteredCcv) {
      alert("Lütfen kart seçin ve güvenlik kodunu girin.");
      return;
    }

    const orderPayload = {
      address_id: selectedAddressId,
      order_date: new Date().toISOString(),
      card_no: selectedCard.card_no,
      card_name: selectedCard.name_on_card,
      card_expire_month: selectedCard.expire_month,
      card_expire_year: selectedCard.expire_year,
      card_ccv: enteredCcv,
      price: cartTotal,
      products: cartItems.map(item => ({
        product_id: item.id,
        count: item.quantity,
        detail: item.detail
      }))
    };

    try {
      const response = await axios.post("http://localhost:3000/order", orderPayload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Siparişiniz başarıyla oluşturuldu!");
      //UI temizliği
      setSelectedCardId(null);
      setSelectedInstallment(1);
      setEnteredCcv('');
      //Sepet temizleme işlemi
    } catch (error) {
      console.error("Sipariş hatası:", error);
      alert("Sipariş sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/*Ödeme türü seçimi*/}
      <PaymentOptions selected={paymentType} onChange={setPaymentType} />

      {/*Kart ile ödeme seçildiyse*/}
      {paymentType === 'card' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <SavedCardList
              refresh={refreshCards}
              onRefreshed={() => setRefreshCards(false)}
              selectedId={selectedCardId}
              onSelect={setSelectedCardId}
            />
            <AddCardForm onSuccess={() => setRefreshCards(true)} />
            <input
              type="text"
              placeholder="Güvenlik Kodu (CCV)"
              value={enteredCcv}
              onChange={(e) => setEnteredCcv(e.target.value)}
              className="border p-2 rounded text-sm"
            />
            <button
              onClick={handleOrderSubmit}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Siparişi Tamamla
            </button>
          </div>

          <InstallmentOptions
            totalAmount={cartTotal}
            selected={selectedInstallment}
            onSelect={setSelectedInstallment}
          />
        </div>
      )}

      {/*Kredi ile ödeme seçildiyse*/}
      {paymentType === 'credit' && (
        <div className="text-sm text-gray-600">
          Alışveriş kredisi ile ödeme seçildi.
        </div>
      )}
    </div>
  );
}