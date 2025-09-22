import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-6 px-4 py-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center">İletişim</h1>

      <form className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Ad Soyad"
          className="border p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="E-posta"
          className="border p-2 rounded-md"
        />
        <textarea
          placeholder="Mesaj"
          rows="4"
          className="border p-2 rounded-md md:col-span-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md md:col-span-2 hover:bg-blue-700 transition"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactPage;