import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

const services = [
  ['01', 'Покраска мебели', 'Фасады, шкафы, кухни, столы и интерьерные изделия с аккуратным финишным покрытием.'],
  ['02', 'Покраска МДФ', 'Гладкие эмали, глубокий мат, глянец и сложные оттенки для фасадов и панелей.'],
  ['03', 'Покраска дерева', 'Сохранение фактуры, тонировка, масло, лак и декоративные покрытия.'],
  ['04', 'Покраска металла', 'Подготовка, грунтование и стойкие покрытия для металлических изделий.'],
  ['05', 'Лакировка', 'Защитные и декоративные лаковые покрытия для мебели и деревянных поверхностей.'],
  ['06', 'Реставрация мебели', 'Восстановление старой мебели, обновление покрытий и возвращение презентабельного вида.'],
  ['07', 'Восстановление фасадов', 'Обновление кухонь, мебельных фасадов, дверец и декоративных элементов.'],
  ['08', 'Покраска дверей и лестниц', 'Работа с крупными интерьерными изделиями в мастерской и на объекте.'],
  ['09', 'Индивидуальные проекты', 'Нестандартные изделия, дизайнерские решения и сложные задачи под интерьер.']
];

const works = Array.from({ length: 13 }, (_, index) => `/works/work-${String(index + 1).padStart(2, '0')}.jpg`);

const steps = [
  ['Заявка', 'Вы оставляете контакты и кратко описываете задачу.'],
  ['Консультация', 'Уточняем материал, состояние изделия, желаемый результат и сроки.'],
  ['Расчет', 'Готовим ориентировочную стоимость и варианты выполнения.'],
  ['Работа', 'Подготовка поверхности, покраска, лакировка или реставрация.'],
  ['Передача', 'Контроль качества и передача готового изделия клиенту.']
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="ГАММА">
            <Image src="/brand/logo.png" alt="Логотип ГАММА" width={88} height={88} priority />
            <strong>МАГМА</strong>
          </a>
          <nav className="menu" aria-label="Навигация">
            <a href="#services">Услуги</a>
            <a href="#works">Работы</a>
            <a href="#process">Процесс</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <a className="phone" href="tel:+74994099431">+7 (499) 409-94-31</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-content">
          <div className="kicker">Студия покраски и реставрации</div>
          <h1>ГАММА</h1>
          <div className="subtitle">Премиальная отделка мебели, дерева и металла</div>
          <p>Одинцово • Москва • Московская область • принимаем изделия транспортными компаниями</p>
          <div className="actions">
            <a className="btn primary" href="#contacts">Получить расчет</a>
            <a className="btn" href="#works">Наши работы</a>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <h2>Что мы делаем</h2>
            <p className="lead">Работаем с мебелью, деревом, МДФ, металлом и интерьерными изделиями. Делаем аккуратную подготовку, финишную покраску, лакировку и восстановление покрытий.</p>
          </div>
          <div className="grid services">
            {services.map(([num, title, text]) => (
              <article className="card service-card" key={title}>
                <span>{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="works">
        <div className="container">
          <div className="section-head">
            <h2>Наши работы</h2>
            <p className="lead">Примеры готовых проектов студии. На сайте используются реальные фотографии работ мастерской.</p>
          </div>
          <div className="grid gallery">
            {works.map((src, index) => (
              <a className="work" href={src} target="_blank" rel="noreferrer" key={src} aria-label={`Открыть работу ${index + 1}`}>
                <Image src={src} alt={`Работа ГАММА ${index + 1}`} width={900} height={1100} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Почему ГАММА</h2>
            <p className="lead">Премиальный внешний вид начинается не с краски, а с подхода: подготовка, технология, аккуратность и контроль результата.</p>
          </div>
          <div className="grid stats">
            <div className="card stat"><strong>12</strong><span>лет опыта</span></div>
            <div className="card stat"><strong>1 год</strong><span>гарантия на работы</span></div>
            <div className="card stat"><strong>0 ₽</strong><span>консультация и расчет</span></div>
            <div className="card stat"><strong>МСК</strong><span>выезд по Москве и МО</span></div>
            <div className="card stat"><strong>РФ</strong><span>прием транспортными компаниями</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-head">
            <h2>Как проходит работа</h2>
            <p className="lead">Прозрачный процесс от первой заявки до готового изделия.</p>
          </div>
          <div className="grid steps">
            {steps.map(([title, text]) => (
              <article className="card step" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contacts">
        <div className="container contact-wrap">
          <div className="card contact-info">
            <h2>Получить расчет</h2>
            <p className="lead">Оставьте заявку. Мы уточним задачу, подскажем по материалам и подготовим расчет стоимости.</p>
            <div className="info-row"><b>Телефон</b><a href="tel:+74994099431">+7 (499) 409-94-31</a></div>
            <div className="info-row"><b>Адрес</b><span>г. Одинцово, Можайское шоссе, д. 2, к. 1</span></div>
            <div className="info-row"><b>География</b><span>Мастерская в Одинцово, выезд по Москве и Московской области. Принимаем изделия транспортными компаниями.</span></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span>© ГАММА — студия покраски и реставрации</span>
          <span>Одинцово • Москва • Московская область</span>
        </div>
      </footer>

      <div className="float-call">
        <a className="btn primary" href="#contacts">Получить расчет</a>
      </div>
    </main>
  );
}
