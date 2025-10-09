import { useEffect, useState } from 'react';
import {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
} from '../api/addressApi';
import axiosInstance from '../api/axiosInstance';
import AddressDropdown from '../components/AddressDropdown';
import AddressForm from '../components/AddressForm';
import PaymentOptions from '../components/PaymentOptions';
import OrderSummary from '../components/OrderSummary';
import SavedCardList from '../components/SavedCardList';
import AddCardForm from '../components/AddCardForm';
import InstallmentOptions from '../components/InstallmentOptions';

export default function CheckoutPage() {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState('add');
  const [initialFormData, setInitialFormData] = useState({});
  const [paymentType, setPaymentType] = useState('card');
  const [cartTotal, setCartTotal] = useState(8499.99);
  const [discountCode, setDiscountCode] = useState('');
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [invoiceAddress, setInvoiceAddress] = useState(null);

  useEffect(() => {
    getAddresses().then((res) => setAddresses(res.data));
  }, []);
 
  const handleAdd = async (data) => {
  
  try {
    const response = await addAddress(data); 
    const updated = await getAddresses(); 
    setAddresses(updated.data);
    const lastAdded = updated.data[updated.data.length - 1];
    setSelectedAddressId(lastAdded.id);
    resetForm();
  } catch (error) {
     }
};

  const handleUpdate = async (data) => {
    await updateAddress(data);
    const updated = await getAddresses();
    setAddresses(updated.data);
    resetForm();
  };

  const resetForm = () => {
    setShowForm(false);
    setInitialFormData({});
    setFormMode('add');
  };

  const handleConfirmOrder = async () => {
    const selectedAddress = addresses.find((addr) => addr.id === selectedAddressId);

    const orderData = {
      addressId: selectedAddressId,
      addressDetails: selectedAddress,
      paymentType,
      total: cartTotal,
      discountCode,
      invoiceAddress: showInvoiceForm ? invoiceAddress : null,
    };

    try {
      await axiosInstance.post('/order', orderData);
      alert('Sipariş başarıyla gönderildi!');
      setSelectedAddressId('');
      setShowInvoiceForm(false);
      setInvoiceAddress(null);
      setDiscountCode('');
      setPaymentType('card');
    } catch (error) {
      console.error('Sipariş gönderimi hatası:', error);
      alert('Sipariş gönderilemedi.');
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    
      <div className="md:col-span-2 flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Teslimat Adresi</h2>

         <div className="flex flex-col md:flex-row gap-4 items-center">
           <AddressDropdown
              addresses={addresses}
              selectedId={selectedAddressId}
              onSelect={setSelectedAddressId}
            />

            <button
              onClick={() => {
                setShowForm(true);
                setFormMode('add');
                setInitialFormData({});
              }}
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded whitespace-nowrap hover:bg-blue-600 transition"
            >
              Yeni Adres Ekle
            </button>
          </div>

         {selectedAddressId && (
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  const selected = addresses.find((a) => a.id === selectedAddressId);
                  setShowForm(true);
                  setFormMode('edit');
                  setInitialFormData(selected);
                }}
                className="text-sm text-blue-600 underline"
              >
                Düzenle
              </button>

              <button
                onClick={async () => {
                  await deleteAddress(selectedAddressId);
                  const updated = await getAddresses();
                  setAddresses(updated.data);
                  setSelectedAddressId('');
                  resetForm();
                }}
                className="text-sm text-red-600 underline"
              >
                Sil
              </button>
            </div>
          )}

       {showForm && (
            <div className="mt-4">
              <AddressForm
                key={formMode}
                initialData={initialFormData}
                onSubmit={formMode === 'edit' ? handleUpdate : handleAdd}
              />
            </div>
          )}

          <label className="flex items-center gap-2 mt-6 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={showInvoiceForm}
              onChange={(e) => setShowInvoiceForm(e.target.checked)}
              className="accent-orange-500 w-4 h-4"
            />
            <span>
              {showInvoiceForm
                ? 'Faturamı ayrı adrese gönder'
                : 'Faturam teslimat adresime gönderilsin'}
            </span>
          </label>

        {showInvoiceForm && (
            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2 text-gray-800">Fatura Adresi</h3>
              <AddressForm onSubmit={(data) => setInvoiceAddress(data)} />
            </div>
          )}
        </div>

        <PaymentOptions selected={paymentType} onChange={setPaymentType} />

{paymentType === 'card' && (
  <div className="flex flex-col gap-6 mt-4">
    <SavedCardList />
    <AddCardForm onSuccess={() => console.log('Kart eklendi')} />
    <InstallmentOptions totalAmount={cartTotal} />
  </div>
)}

{paymentType === 'credit' && (
  <div className="mt-4 text-sm text-gray-600">
    Alışveriş kredisi ile ödeme seçildi.
  </div>
)}
      </div>

      <div className="self-start w-full max-w-md">
        <OrderSummary
          total={cartTotal}
          onConfirm={handleConfirmOrder}
          isDisabled={!selectedAddressId}
          discountCode={discountCode}
          onDiscountCodeChange={setDiscountCode}
        />
      </div>
    </div>
  );
}









