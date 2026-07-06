import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'МАГМА — студия покраски и реставрации',
  description: 'Премиальная покраска мебели, дерева, МДФ и металла. Реставрация мебели. Одинцово, Москва и Московская область.',
  keywords: ['покраска мебели', 'реставрация мебели', 'покраска МДФ', 'покраска дерева', 'покраска металла', 'Одинцово'],
  openGraph: {
    title: 'МАГМА — студия покраски и реставрации',
    description: 'Премиальная отделка мебели, дерева и металла.',
    type: 'website',
    locale: 'ru_RU'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
