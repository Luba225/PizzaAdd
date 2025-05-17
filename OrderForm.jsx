import React, { useState } from 'react';

function OrderForm() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert("Будь ласка, заповніть всі обов'язкові поля");
      return;
    }
    alert('Замовлення оформлено!');
    localStorage.removeItem('cart');
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <input
        type="text"
        placeholder="Ім'я"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Адреса доставки"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        required
      />
      <textarea
        placeholder="Коментар"
        value={form.comment}
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
      />
      <button type="submit">🛍️Підтвердити замовлення</button>
    </form>
  );
}

export default OrderForm;
