import { useEffect, useState } from 'react';
import { getCards, deleteCard } from '../api/cardApi';

export default function SavedCardList({ refresh, onRefreshed }) {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await getCards();
      setCards(response.data);
      if (onRefreshed) onRefreshed();
    } catch (error) {
      console.error('Kartlar alınamadı:', error);
    }
  };

  useEffect(() => {
    fetchCards(); // İlk yükleme
  }, []);

  useEffect(() => {
    if (refresh) fetchCards(); // Yenileme tetiklendiğinde
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      await deleteCard(id);
      fetchCards(); // Silme sonrası listeyi güncelle
    } catch (error) {
      console.error('Kart silinemedi:', error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Kayıtlı Kartlar</h3>

      {cards.length === 0 ? (
        <p className="text-sm text-gray-500">Kayıtlı kart bulunamadı.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex justify-between items-center p-4 border rounded shadow-sm bg-white"
            >
              <div>
                <p className="font-medium">{card.name_on_card}</p>
                <p className="text-sm text-gray-600">
                  **** **** **** {card.card_no?.slice(-4) ?? "****"}
                </p>
                <p className="text-xs text-gray-500">
                  Son Kullanma: {card.expire_month}/{card.expire_year}
                </p>
              </div>
              <button
                onClick={() => handleDelete(card.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

