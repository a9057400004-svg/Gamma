import { NextResponse } from 'next/server';

function clean(value: unknown) {
  return String(value ?? '').trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name);
    const phone = clean(body.phone);
    const work = clean(body.work);

    if (!name || !phone || !work) {
      return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || '-1004447953221';

    if (!token) {
      return NextResponse.json({ error: 'Не задан TELEGRAM_BOT_TOKEN' }, { status: 500 });
    }

    const text = [
      '🔥 Новая заявка с сайта МАГМА',
      '',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Работы: ${work}`,
      '',
      `Дата: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`
    ].join('\n');

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
