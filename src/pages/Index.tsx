import { useState } from "react";
import Icon from "@/components/ui/icon";

const MENU_ITEMS = [
  {
    category: "Первые блюда",
    emoji: "🍲",
    items: [
      { name: "Борщ со сметаной", weight: "300 г", price: 120 },
      { name: "Щи из свежей капусты", weight: "300 г", price: 110 },
      { name: "Суп гороховый с копчёностями", weight: "300 г", price: 105 },
      { name: "Рассольник домашний", weight: "300 г", price: 115 },
    ],
  },
  {
    category: "Вторые блюда",
    emoji: "🍽️",
    items: [
      { name: "Котлета домашняя с гречкой", weight: "200/150 г", price: 195 },
      { name: "Тефтели в томатном соусе", weight: "200/150 г", price: 185 },
      { name: "Куриная грудка с картофелем", weight: "200/150 г", price: 210 },
      { name: "Рыба запечённая с рисом", weight: "200/150 г", price: 225 },
    ],
  },
  {
    category: "Салаты",
    emoji: "🥗",
    items: [
      { name: "Оливье с докторской колбасой", weight: "150 г", price: 90 },
      { name: "Свекольный с чесноком", weight: "150 г", price: 75 },
      { name: "Греческий", weight: "180 г", price: 110 },
      { name: "Морковь по-корейски", weight: "150 г", price: 70 },
    ],
  },
  {
    category: "Напитки и выпечка",
    emoji: "☕",
    items: [
      { name: "Компот из сухофруктов", weight: "200 мл", price: 45 },
      { name: "Чай чёрный / зелёный", weight: "200 мл", price: 35 },
      { name: "Пирожок с капустой", weight: "80 г", price: 55 },
      { name: "Ватрушка со сметаной", weight: "90 г", price: 65 },
    ],
  },
];

const GALLERY_IMAGES = [
  {
    src: "https://cdn.poehali.dev/projects/5f2a3daf-7537-4d09-ac43-1e03a1ff4102/files/51ecac93-836d-411a-a29e-c11d2f6f42a7.jpg",
    alt: "Уютный зал столовой",
    caption: "Уютный зал",
  },
  {
    src: "https://cdn.poehali.dev/projects/5f2a3daf-7537-4d09-ac43-1e03a1ff4102/files/07439544-f529-44c9-b1d5-99673ba8bab0.jpg",
    alt: "Домашние блюда",
    caption: "Домашняя кухня",
  },
  {
    src: "https://cdn.poehali.dev/projects/5f2a3daf-7537-4d09-ac43-1e03a1ff4102/files/c5c4d750-fd99-4f13-b907-667e92e23b3a.jpg",
    alt: "Бизнес-ланч",
    caption: "Бизнес-ланч",
  },
];

export default function Index() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(38, 30%, 97%)" }}>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm" style={{ borderColor: "hsl(35, 25%, 85%)" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍽️</span>
            <span className="font-bold text-xl" style={{ color: "hsl(350, 65%, 38%)", fontFamily: "'Cormorant', serif" }}>
              Столовая Гранат
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {(["Меню", "Бизнес-ланч", "Доставка", "Галерея", "Контакты"] as const).map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(["menu", "lunch", "delivery", "gallery", "contacts"][i])}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 25%, 15%)" }}
              >
                {item}
              </button>
            ))}
          </nav>

          <a
            href="tel:+79001234567"
            className="hidden md:flex items-center gap-2 text-white text-sm font-medium px-5 py-2 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: "hsl(350, 65%, 38%)", fontFamily: "'Golos Text', sans-serif" }}
          >
            <Icon name="Phone" size={15} />
            +7 (900) 123-45-67
          </a>

          <button
            className="md:hidden p-2"
            style={{ color: "hsl(350, 65%, 38%)" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3" style={{ borderColor: "hsl(35, 25%, 85%)" }}>
            {(["Меню", "Бизнес-ланч", "Доставка", "Галерея", "Контакты"] as const).map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(["menu", "lunch", "delivery", "gallery", "contacts"][i])}
                className="text-left py-2 border-b last:border-0"
                style={{ fontFamily: "'Golos Text', sans-serif", borderColor: "hsl(35, 30%, 93%)" }}
              >
                {item}
              </button>
            ))}
            <a
              href="tel:+79001234567"
              className="text-center text-white font-medium px-5 py-3 rounded-xl mt-2"
              style={{ backgroundColor: "hsl(350, 65%, 38%)", fontFamily: "'Golos Text', sans-serif" }}
            >
              Позвонить
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${GALLERY_IMAGES[0].src}')` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(45,25,15,0.88) 0%, rgba(45,25,15,0.65) 55%, rgba(45,25,15,0.2) 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-20 pb-32">
          <div className="max-w-2xl">
            <p
              className="text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(28, 85%, 70%)" }}
            >
              Домашняя кухня с 2010 года
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Столовая
              <br />
              <span style={{ color: "hsl(28, 85%, 70%)" }}>Гранат</span>
            </h1>
            <p
              className="text-lg md:text-xl mb-10 leading-relaxed"
              style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.80)" }}
            >
              Вкусно, сытно и по-домашнему. Готовим из свежих продуктов каждый день — так, как готовит мама.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("menu")}
                className="text-white font-medium px-8 py-4 rounded-xl transition-opacity hover:opacity-90 text-base"
                style={{ backgroundColor: "hsl(350, 65%, 38%)", fontFamily: "'Golos Text', sans-serif" }}
              >
                Смотреть меню
              </button>
              <button
                onClick={() => scrollTo("lunch")}
                className="font-medium px-8 py-4 rounded-xl text-base transition-all hover:bg-white hover:text-black"
                style={{
                  border: "2px solid rgba(255,255,255,0.55)",
                  color: "white",
                  fontFamily: "'Golos Text', sans-serif",
                  background: "transparent",
                }}
              >
                Бизнес-ланч от 250 ₽
              </button>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 border-t"
          style={{ backgroundColor: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)", borderColor: "rgba(255,255,255,0.15)" }}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "Clock", label: "Пн–Пт 8:00–20:00", sub: "Сб–Вс 9:00–18:00" },
              { icon: "MapPin", label: "ул. Центральная, 15", sub: "В центре города" },
              { icon: "Star", label: "4.8 / 5.0", sub: "Более 500 отзывов" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 text-white">
                <Icon name={s.icon as string} size={20} style={{ color: "hsl(28, 85%, 65%)" }} />
                <div>
                  <p className="font-medium text-sm leading-tight" style={{ fontFamily: "'Golos Text', sans-serif" }}>{s.label}</p>
                  <p className="text-xs" style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.55)" }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-4 md:px-8" style={{ backgroundColor: "hsl(38, 55%, 94%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(350, 65%, 38%)" }}>
              Наши блюда
            </p>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "hsl(20, 30%, 25%)" }}>
              Меню столовой
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 15%, 50%)" }}>
              Всё готовится каждое утро из свежих продуктов. Без полуфабрикатов.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {MENU_ITEMS.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveMenu(i)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  backgroundColor: activeMenu === i ? "hsl(350, 65%, 38%)" : "white",
                  color: activeMenu === i ? "white" : "hsl(20, 25%, 15%)",
                  border: activeMenu === i ? "none" : "1px solid hsl(35, 25%, 85%)",
                  boxShadow: activeMenu === i ? "0 2px 8px rgba(120,30,30,0.25)" : "none",
                }}
              >
                <span>{cat.emoji}</span>
                {cat.category}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden" style={{ border: "1px solid hsl(35, 25%, 85%)" }}>
            {MENU_ITEMS[activeMenu].items.map((item, i) => (
              <div
                key={item.name}
                className="flex items-center justify-between px-6 py-5"
                style={{
                  borderBottom: i < MENU_ITEMS[activeMenu].items.length - 1 ? "1px solid hsl(35, 30%, 93%)" : "none",
                }}
              >
                <div>
                  <p className="font-medium" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 25%, 15%)" }}>{item.name}</p>
                  <p className="text-sm mt-0.5" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 15%, 50%)" }}>{item.weight}</p>
                </div>
                <span
                  className="font-semibold text-xl"
                  style={{ fontFamily: "'Cormorant', serif", color: "hsl(350, 65%, 38%)" }}
                >
                  {item.price} ₽
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS LUNCH */}
      <section id="lunch" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(350, 65%, 38%)" }}>
                Каждый день
              </p>
              <h2 className="mb-6" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "hsl(20, 30%, 25%)" }}>
                Бизнес-ланч
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 15%, 50%)" }}>
                Успейте пообедать с 11:00 до 15:00. Сытный комплексный обед по специальной цене — выгодно и вкусно.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "Soup", text: "Суп на выбор" },
                  { icon: "UtensilsCrossed", text: "Второе с двумя гарнирами" },
                  { icon: "Salad", text: "Салат или закуска" },
                  { icon: "Coffee", text: "Напиток: чай, кофе или компот" },
                ].map((row) => (
                  <div key={row.text} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "hsl(38, 55%, 94%)" }}
                    >
                      <Icon name={row.icon as string} size={18} style={{ color: "hsl(350, 65%, 38%)" }} />
                    </div>
                    <p style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 25%, 15%)" }}>{row.text}</p>
                  </div>
                ))}
              </div>

              <div className="text-white rounded-2xl p-6 inline-block" style={{ backgroundColor: "hsl(350, 65%, 38%)" }}>
                <p className="text-sm mb-1" style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.70)" }}>Комплексный обед</p>
                <p style={{ fontFamily: "'Cormorant', serif", fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}>от 250 ₽</p>
                <p className="text-sm mt-1" style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.70)" }}>с 11:00 до 15:00, Пн–Пт</p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
                <img
                  src={GALLERY_IMAGES[2].src}
                  alt="Бизнес-ланч"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 text-white rounded-2xl px-5 py-3 shadow-lg" style={{ backgroundColor: "hsl(28, 85%, 52%)" }}>
                <p className="font-semibold text-sm" style={{ fontFamily: "'Golos Text', sans-serif" }}>Ежедневное</p>
                <p className="text-xs" style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.80)" }}>обновление меню</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-20 px-4 md:px-8" style={{ backgroundColor: "hsl(38, 55%, 94%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(350, 65%, 38%)" }}>
              Привезём к вам
            </p>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "hsl(20, 30%, 25%)" }}>
              Доставка блюд
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "Clock", title: "Быстро", desc: "Доставляем в течение 45–60 минут по городу", bg: "hsl(350, 65%, 38%)" },
              { icon: "Package", title: "Горячим", desc: "Специальная упаковка сохраняет тепло и аромат", bg: "hsl(28, 85%, 52%)" },
              { icon: "Truck", title: "Бесплатно", desc: "Бесплатная доставка при заказе от 600 ₽", bg: "hsl(350, 65%, 38%)" },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-3xl p-8 shadow-sm text-center" style={{ border: "1px solid hsl(35, 25%, 85%)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: card.bg }}>
                  <Icon name={card.icon as string} size={24} style={{ color: "white" }} />
                </div>
                <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Cormorant', serif", color: "hsl(20, 25%, 15%)" }}>
                  {card.title}
                </h3>
                <p className="leading-relaxed" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 15%, 50%)" }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10" style={{ border: "1px solid hsl(35, 25%, 85%)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Cormorant', serif", color: "hsl(20, 25%, 15%)" }}>
                  Как оформить заказ?
                </h3>
                <div className="space-y-4">
                  {[
                    "Позвоните нам или напишите в WhatsApp",
                    "Назовите блюда из меню и адрес доставки",
                    "Ждите — привезём горячим в срок",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 rounded-full text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5"
                        style={{ backgroundColor: "hsl(350, 65%, 38%)", fontFamily: "'Cormorant', serif" }}
                      >
                        {i + 1}
                      </div>
                      <p className="pt-1" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 25%, 15%)" }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm mb-2" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 15%, 50%)" }}>Принимаем заказы:</p>
                <p className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Cormorant', serif", color: "hsl(20, 25%, 15%)" }}>
                  Пн–Пт с 8:00 до 19:00
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+79001234567"
                    className="text-center text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "hsl(350, 65%, 38%)", fontFamily: "'Golos Text', sans-serif" }}
                  >
                    <Icon name="Phone" size={16} />
                    Позвонить
                  </a>
                  <a
                    href="https://wa.me/79001234567"
                    className="text-center font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:text-white"
                    style={{
                      border: "2px solid hsl(350, 65%, 38%)",
                      color: "hsl(350, 65%, 38%)",
                      fontFamily: "'Golos Text', sans-serif",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(350, 65%, 38%)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "hsl(350, 65%, 38%)"; }}
                  >
                    <span>💬</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(350, 65%, 38%)" }}>
              Атмосфера
            </p>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "hsl(20, 30%, 25%)" }}>
              Наша столовая
            </h2>
            <p className="mt-4 max-w-md mx-auto" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 15%, 50%)" }}>
              Уютный зал на 60 мест, живые цветы, домашняя обстановка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group ${i === 0 ? "md:col-span-2 min-h-[300px]" : ""}`}
                style={{ aspectRatio: i === 0 ? "auto" : "1/1", minHeight: i === 0 ? 320 : 220 }}
                onClick={() => setLightboxImg(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }} />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-sm px-3 py-1 rounded-full" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 25%, 15%)" }}>
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxImg !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightboxImg(null)}
        >
          <div className="max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY_IMAGES[lightboxImg].src} alt={GALLERY_IMAGES[lightboxImg].alt} className="w-full rounded-2xl" />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <Icon name="X" size={18} />
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {GALLERY_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxImg(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{ backgroundColor: lightboxImg === i ? "white" : "rgba(255,255,255,0.4)", transform: lightboxImg === i ? "scale(1.3)" : "scale(1)" }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CONTACTS */}
      <section id="contacts" className="py-20 px-4 md:px-8" style={{ backgroundColor: "hsl(38, 55%, 94%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(350, 65%, 38%)" }}>
              Найдите нас
            </p>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "hsl(20, 30%, 25%)" }}>
              Контакты и режим работы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { icon: "MapPin", title: "Адрес", lines: ["ул. Центральная, д. 15", "г. Краснодар"] },
                { icon: "Clock", title: "Режим работы", lines: ["Понедельник – Пятница: 8:00 – 20:00", "Суббота – Воскресенье: 9:00 – 18:00"] },
                { icon: "Phone", title: "Телефон", lines: ["+7 (900) 123-45-67", "Звонки и WhatsApp"] },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-5" style={{ border: "1px solid hsl(35, 25%, 85%)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(38, 55%, 94%)" }}>
                    <Icon name={card.icon as string} size={22} style={{ color: "hsl(350, 65%, 38%)" }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 25%, 15%)" }}>{card.title}</p>
                    {card.lines.map((l) => (
                      <p key={l} className="text-sm" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 15%, 50%)" }}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="text-white rounded-2xl p-6" style={{ backgroundColor: "hsl(350, 65%, 38%)" }}>
                <p className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Cormorant', serif" }}>Ждём вас!</p>
                <p className="text-sm mb-4" style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.78)" }}>
                  Приходите пообедать или закажите доставку — будем рады накормить вкусно.
                </p>
                <a
                  href="tel:+79001234567"
                  className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  style={{ backgroundColor: "white", color: "hsl(350, 65%, 38%)", fontFamily: "'Golos Text', sans-serif" }}
                >
                  <Icon name="Phone" size={16} />
                  Позвонить
                </a>
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-4 min-h-[400px]"
              style={{ backgroundColor: "hsl(35, 30%, 93%)", border: "1px solid hsl(35, 25%, 85%)" }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <Icon name="MapPin" size={28} style={{ color: "hsl(350, 65%, 38%)" }} />
              </div>
              <div className="text-center px-6">
                <p className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Cormorant', serif", color: "hsl(20, 25%, 15%)" }}>
                  ул. Центральная, 15
                </p>
                <p className="text-sm" style={{ fontFamily: "'Golos Text', sans-serif", color: "hsl(20, 15%, 50%)" }}>
                  г. Краснодар, рядом с центральным рынком
                </p>
              </div>
              <a
                href="https://yandex.ru/maps/?text=ул.+Центральная+15+Краснодар"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all hover:opacity-80"
                style={{
                  border: "2px solid hsl(350, 65%, 38%)",
                  color: "hsl(350, 65%, 38%)",
                  fontFamily: "'Golos Text', sans-serif",
                }}
              >
                <Icon name="Navigation" size={15} />
                Открыть в картах
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 md:px-8" style={{ backgroundColor: "hsl(20, 30%, 18%)", color: "white" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍽️</span>
            <div>
              <p className="font-bold text-xl" style={{ fontFamily: "'Cormorant', serif" }}>Столовая Гранат</p>
              <p className="text-xs" style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.45)" }}>Домашняя кухня с 2010 года</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {(["Меню", "Бизнес-ланч", "Доставка", "Галерея"] as const).map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(["menu", "lunch", "delivery", "gallery"][i])}
                className="text-sm transition-colors hover:text-white"
                style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.55)" }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="text-center md:text-right">
            <a href="tel:+79001234567" className="font-medium block" style={{ fontFamily: "'Golos Text', sans-serif", color: "white" }}>
              +7 (900) 123-45-67
            </a>
            <p className="text-xs mt-1" style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.45)" }}>Пн–Пт 8:00–20:00</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <p className="text-xs" style={{ fontFamily: "'Golos Text', sans-serif", color: "rgba(255,255,255,0.28)" }}>
            © 2024 Столовая Гранат. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}