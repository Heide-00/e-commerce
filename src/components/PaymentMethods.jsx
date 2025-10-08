import { useState } from 'react';
import PaymentOptions from './PaymentOptions';
import SavedCardList from './SavedCardList';
import AddCardForm from './AddCardForm';
import InstallmentOptions from './InstallmentOptions';

export default function PaymentMethods({ cartTotal = 8499.99 }) {
  const [paymentType, setPaymentType] = useState('card');
  const [refreshCards, setRefreshCards] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedInstallment, setSelectedInstallment] = useState(1);

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