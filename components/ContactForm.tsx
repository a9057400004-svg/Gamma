'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('Отправляем заявку...');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          work: formData.get('work')
        })
      });

      if (!response.ok) throw new Error('Ошибка отправки');

      setStatus('success');
      setMessage('Спасибо. Заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      form.reset();
    } catch {
      setStatus('error');
      setMessage('Не удалось отправить заявку. Позвоните нам: +7 (499) 409-94-31.');
    }
  }

  return (
    <form className="form card" onSubmit={onSubmit}>
      <label htmlFor="name">Имя</label>
      <input id="name" name="name" type="text" placeholder="Как к вам обращаться" required />

      <label htmlFor="phone">Телефон</label>
      <input id="phone" name="phone" type="tel" placeholder="+7 ..." required />

      <label htmlFor="work">Какие работы необходимо выполнить</label>
      <textarea id="work" name="work" placeholder="Например: покрасить фасады кухни, восстановить стол, лакировка дерева" required />

      <button className="btn primary" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Отправляем...' : 'Получить расчет стоимости'}
      </button>
      <div className="status" aria-live="polite">{message}</div>
    </form>
  );
}
