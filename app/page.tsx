"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Facebook, MessageCircle, ShoppingCart, X, ArrowRight } from "lucide-react";

// ====== CONFIG ======
const PHONE_1 = "0937799880";
const PHONE_2 = "0587666611";
const EMAIL = "sonthat77@gmail.com";
const MST = "8674064188 - 001";
const ZALO_LINK = `https://zalo.me/${PHONE_1}`;
const FB_LINK = "https://www.facebook.com/profile.php?id=61574124940681";

const LANGS = { vi: "VI", en: "EN" } as const;

// ====== TRANSLATIONS ======
const tDict = {
  vi: {
    nav_products: "Sản phẩm",
    nav_pricing: "Bảng giá",
    nav_compare: "So sánh",
    nav_pack: "Đóng gói",
    nav_contact: "Liên hệ",
    hero_sub: "Precision in Every Break – Phin xếp bi cao cấp cho CLB & giải đấu",
    cta_products: "Xem sản phẩm",
    cta_contact: "Liên hệ đặt hàng",
    intro_title: "Giới thiệu thương hiệu",
    intro_sub: "Tinh gọn – Chính xác – Bền bỉ trong từng cú phá",
    intro_p1:
      "Titanium Vietnam là nhà sản xuất Titanium Rack Sheet – phụ kiện bi-a tối ưu cho CLB & giải đấu. Sản phẩm được chế tác bằng công nghệ dập khuôn tiên tiến, đảm bảo độ chính xác và độ bền.",
    intro_p2:
      "Phân phối toàn quốc, ship COD không cần thanh toán trước. Hỗ trợ đại lý, dự án CLB và giải đấu.",
    products_title: "3 Dòng sản phẩm Titanium Rack Sheet",
    products_sub: "Cao cấp – Phổ thông – Thường (≈ 3 tuần sử dụng)",
    bestseller: "BÁN CHẠY NHẤT",
    pricing: "Bảng giá",
    col_line: "Dòng",
    dealer: "Giá đại lý",
    retail: "Giá lẻ đề xuất",
    pricing_note: "Giá niêm yết; giá đại lý tùy theo số lượng",
    compare_title: "So sánh 3 dòng phin",
    compare_sub: "Chọn nhanh theo nhu cầu của bạn",
    col_material: "Chất liệu",
    col_colors: "Màu",
    col_mode: "Dùng cho",
    col_best: "Phù hợp",
    col_price: "Giá",
    tag_best: "Best",
    pack_title: "Quy cách & Đóng gói",
    pack_line: "Đóng gói: 6 phin/tệp – 10 tệp/hộp",
    ship_cod: "Ship COD toàn quốc – Không cần thanh toán trước",
    partner_title: "Hỗ trợ Đại lý & Câu lạc bộ",
    partner_dealer_t: "Hợp tác Đại lý",
    partner_dealer_p:
      "Chính sách chiết khấu linh hoạt theo cấp độ hợp tác. Titanium hỗ trợ biển hiệu, poster, và quà tặng thương hiệu.",
    partner_club_t: "Đồng hành CLB",
    partner_club_p:
      "Hỗ trợ truyền thông, nhận diện thương hiệu Titanium tại CLB. Cung cấp sản phẩm dùng thử, tặng phẩm & poster cho khu vực thi đấu.",
    partner_tour_t: "Tài trợ Giải đấu",
    partner_tour_p:
      "Đồng hành cùng các giải đấu địa phương & quốc gia. Cung cấp sản phẩm hỗ trợ và quà lưu niệm thương hiệu Titanium.",
    partner_zalo: "Liên hệ qua Zalo",
    partner_fb: "Liên hệ qua Facebook",
    partner_note:
      "* Mọi thông tin chi tiết về chính sách hợp tác, vui lòng liên hệ trực tiếp để được tư vấn.",
    contact_title: "Liên hệ & Đặt hàng",
    contact_sub: "Gọi trực tiếp hoặc nhắn Zalo để đặt hàng COD",
    send_req: "Gửi yêu cầu",
    name: "Họ và tên",
    phone: "Số điện thoại / Zalo",
    email: "Email (tuỳ chọn)",
    message: "Nội dung: số lượng, dòng sản phẩm, khu vực…",
    cart: "Giỏ hàng",
    emptyCart: "Giỏ hàng đang trống",
    subtotal: "Tạm tính",
    continue: "Tiếp tục xem",
    place_cod: "Đặt hàng COD",
    alert_sent: "Gửi thành công! Chúng tôi sẽ liên hệ sớm.",
    alert_fail: "Gửi thất bại, vui lòng thử lại.",
    alert_net: "Lỗi mạng.",
    btn_submit: "Gửi yêu cầu",
    footer_rights: "Bảo lưu mọi quyền.",
    address_label: "Địa chỉ",
  },
  en: {
    nav_products: "Products",
    nav_pricing: "Pricing",
    nav_compare: "Compare",
    nav_pack: "Packaging",
    nav_contact: "Contact",
    hero_sub:
      "Precision in Every Break – Premium rack sheets for clubs & tournaments",
    cta_products: "See products",
    cta_contact: "Contact",
    intro_title: "About the brand",
    intro_sub: "Lean – Precise – Durable in every break",
    intro_p1:
      "Titanium Vietnam manufactures Titanium Rack Sheets — optimized accessories for billiards clubs and tournaments. Produced with advanced die-cut technology for precise fit and durability.",
    intro_p2:
      "Nationwide distribution with COD, no prepayment required. Dealer, club and tournament support available.",
    products_title: "Titanium Rack Sheet lineup (3)",
    products_sub: "Premium – Standard – Economy",
    bestseller: "BEST SELLER",
    pricing: "Pricing",
    col_line: "Line",
    dealer: "Dealer",
    retail: "MSRP",
    pricing_note: "MSRP shown; dealer price depends on volume",
    compare_title: "Compare the 3 lines",
    compare_sub: "Pick what fits your play",
    col_material: "Material",
    col_colors: "Colors",
    col_mode: "For",
    col_best: "Best for",
    col_price: "Price",
    tag_best: "Best",
    pack_title: "Specifications & Packaging",
    pack_line: "Packaging: 6 sheets/pack – 10 packs/box",
    ship_cod: "Nationwide COD shipping – No prepayment",
    partner_title: "Dealer & Club Support",
    partner_dealer_t: "Dealer Program",
    partner_dealer_p:
      "Flexible discount tiers by partnership level. Titanium provides signage, posters and branded gifts.",
    partner_club_t: "Club Partnership",
    partner_club_p:
      "Branding support at the club. Trial products, giveaways and posters for the match area.",
    partner_tour_t: "Tournament Sponsorship",
    partner_tour_p:
      "Supporting local & national tournaments. Product support and Titanium-branded souvenirs.",
    partner_zalo: "Contact via Zalo",
    partner_fb: "Contact via Facebook",
    partner_note:
      "* For detailed partnership policies, please contact us for consultation.",
    contact_title: "Orders & Contact",
    contact_sub: "Call or message Zalo to place a COD order",
    send_req: "Send request",
    name: "Full name",
    phone: "Phone / Zalo",
    email: "Email (optional)",
    message: "Message: qty, product line, region…",
    cart: "Cart",
    emptyCart: "Your cart is empty",
    subtotal: "Subtotal",
    continue: "Continue browsing",
    place_cod: "Place COD order",
    alert_sent: "Sent! We will contact you soon.",
    alert_fail: "Submission failed. Please try again.",
    alert_net: "Network error.",
    btn_submit: "Send request",
    footer_rights: "All rights reserved.",
    address_label: "Address",
  },
} as const;

// Product bilingual content (images & filenames kept)
const PRODUCTS = [
  {
    id: "caocap",
    viName: "Cao cấp",
    enName: "Premium",
    price: 50000,
    badge: true,
    gallery: [
      "/images/phin cao cấp.png",
      "/images/cc1.jpg",
      "/images/cc2.jpg",
      "/images/cc3.jpg",
      "/images/cc4.jpg",
      "/images/cc5.jpg",
      "/images/cc6.jpg",
      "/images/cc7.jpg",
    ],
    viBullets: [
      "Nhựa PE cao cấp, dày 0.15 mm",
      "Dập khuôn chính xác; đường cắt mịn",
      "Dùng cho 9 bi & 10 bi",
      "Màu trắng tinh tế",
      "≈ 3 tuần sử dụng",
    ],
    enBullets: [
      "Premium PE plastic, 0.15 mm",
      "Precision die-cut; smooth edges",
      "Fits 9-ball & 10-ball",
      "Elegant white finish",
      "≈ 3 weeks of use",
    ],
  },
  {
    id: "phothong",
    viName: "Phổ thông",
    enName: "Standard",
    price: 40000,
    badge: false,
    gallery: [
      "/images/phin phổ thông.png",
      "/images/phin phổ thông đỏ.png",
      "/images/phin phổ thông xanh lá.png",
      "/images/phin phổ thông vàng.png",
      "/images/pt2.jpg",
      "/images/pt3.jpg",
      "/images/pt4.jpg",
      "/images/pt5.jpg",
      "/images/pt6.jpg",
      "/images/pt7.jpg",
    ],
    viBullets: [
      "Nhựa PP bền bỉ, dày 0.16 mm",
      "Dập khuôn chính xác; đường cắt mịn",
      "Dùng cho 9 bi & 10 bi",
      "3 màu: Đỏ, Xanh lá, Vàng",
      "≈ 2.5 tuần sử dụng",
    ],
    enBullets: [
      "Durable PP plastic, 0.16 mm",
      "Precision die-cut; smooth edges",
      "Fits 9-ball & 10-ball",
      "3 colors: Red, Green, Yellow",
      "≈ 2.5 weeks of use",
    ],
  },
  {
    id: "thuong",
    viName: "Thường",
    enName: "Economy",
    price: 20000,
    badge: false,
    gallery: ["/images/phin thường.png"],
    viBullets: [
      "Giấy C170 phủ, dày 0.16 mm",
      "Gia công dập khuôn chính xác",
      "Thiết kế cho 9 bi",
      "Tông xanh xám nhẹ",
      "≈ 2 tuần sử dụng",
    ],
    enBullets: [
      "Coated C170 paper, 0.16 mm",
      "Accurate die-cut workmanship",
      "Designed for 9-ball",
      "Soft blue-gray tone",
      "≈ 2 weeks of use",
    ],
  },
];

const Container = ({ children }: any) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);
const SectionTitle = ({ eyebrow, title, subtitle }: any) => (
  <div className="mx-auto max-w-3xl text-center mb-10">
    {eyebrow && (
      <p className="text-xs tracking-widest uppercase text-gray-500">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-base md:text-lg text-gray-600">{subtitle}</p>
    )}
  </div>
);
const Tag = ({ children }: any) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-white/70 backdrop-blur">
    {children}
  </span>
);

export default function Home() {
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const t = tDict[lang];

  const [cart, setCart] = useState<any>({});
  const items = PRODUCTS.filter((p) => cart[p.id]).map((p) => ({
    p,
    qty: cart[p.id],
  }));
  const subtotal = items.reduce((s, it) => s + it.p.price * it.qty, 0);
  const [openCart, setOpenCart] = useState(false);

  const add = (id: string) => {
    setCart((c: any) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    setOpenCart(true);
  };
  const inc = (id: string) =>
    setCart((c: any) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const dec = (id: string) =>
    setCart((c: any) => ({ ...c, [id]: Math.max(0, (c[id] || 0) - 1) }));

  return (
    <div className="font-sans text-gray-900">
      <BrandFonts />
      <Header
        lang={lang}
        setLang={setLang as any}
        t={t}
        cartCount={Object.values(cart).reduce((a: any, b: any) => a + (b || 0), 0)}
        onCart={() => setOpenCart(true)}
      />
      <Hero t={t} />
      <About t={t} lang={lang} />
      <Products t={t} add={add} lang={lang} />
      <Packaging t={t} />
      <Pricing t={t} lang={lang} />
      <Compare t={t} lang={lang} />
      {/* ===== Partner Support Section ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            {t.partner_title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold mb-2">
                {t.partner_dealer_t}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.partner_dealer_p}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎱</div>
              <h3 className="text-xl font-semibold mb-2">{t.partner_club_t}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.partner_club_p}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">{t.partner_tour_t}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.partner_tour_p}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
            >
              {t.partner_zalo}
            </a>
            <a
              href={FB_LINK}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition"
            >
              {t.partner_fb}
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6 italic">{t.partner_note}</p>
        </div>
      </section>

      <Contact t={t} lang={lang} />
      <Footer t={t} />
      <FloatingButtons />
      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
        t={t}
        items={items}
        subtotal={subtotal}
        inc={inc}
        dec={dec}
      />
    </div>
  );
}

// Brand fonts only for logo usage
function BrandFonts() {
  return (
    <style>{`
      @font-face {
        font-family: 'Copperplate';
        src: url('/fonts/Copperplate.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Gill Sans MT';
        src: url('/fonts/GillSansMT.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      .logo-titanium { font-family: 'Copperplate', serif; letter-spacing: 0.06em; }
      .logo-vietnam { font-family: 'Gill Sans MT', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; letter-spacing: 0.18em; }
    `}</style>
  );
}

function Header({ lang, setLang, t, cartCount, onCart }: any) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/logo chữ đen.png"
              alt="Titanium Vietnam Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-none">
              <div className="logo-titanium font-black text-lg tracking-tight">
                TITANIUM
              </div>
              <div className="logo-vietnam text-[10px] -mt-0.5 text-gray-600">
                VIETNAM
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-gray-900 text-gray-600">
              {t.nav_products}
            </a>
            <a href="#pricing" className="hover:text-gray-900 text-gray-600">
              {t.nav_pricing}
            </a>
            <a href="#compare" className="hover:text-gray-900 text-gray-600">
              {t.nav_compare}
            </a>
            <a href="#packaging" className="hover:text-gray-900 text-gray-600">
              {t.nav_pack}
            </a>
            <a href="#contact" className="hover:text-gray-900 text-gray-600">
              {t.nav_contact}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex border rounded-xl overflow-hidden">
              {Object.entries(LANGS).map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setLang(k as any)}
                  className={`px-3 py-1 text-sm ${
                    lang === k ? "bg-black text-white" : "text-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Button onClick={onCart} variant="outline" className="rounded-xl relative">
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] px-1 rounded-full bg-black text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <a href="#products" className="hidden md:inline-flex">
              <Button className="rounded-2xl">
                <span className="inline-flex items-center">
                  {t.cta_products}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Hero({ t }: any) {
  return (
    <section id="top" className="relative py-24 md:py-32 text-center text-white">
      <img
        src="/images/bìa.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,.65)" }} // 65% darken
      />
      <Container>
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/images/logo trắng.jpg"
            alt="Logo"
            className="w-28 h-28 rounded-full bg-white/10 p-3 mb-6"
          />
          <div className="leading-tight">
            <div className="logo-titanium text-4xl md:text-5xl font-extrabold tracking-tight">
              TITANIUM
            </div>
            <div className="logo-vietnam text-sm md:text-base tracking-[0.2em]">
              VIETNAM
            </div>
          </div>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">{t.hero_sub}</p>
          <div className="mt-8 flex gap-3">
            <a href="#products">
              <Button size="lg" className="rounded-2xl">
                {t.cta_products}
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-white text-white hover:bg-white hover:text-black"
              >
                {t.cta_contact}
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About({ t, lang }: any) {
  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionTitle title={t.intro_title} subtitle={t.intro_sub} />
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              <strong>Titanium Vietnam</strong> {lang === "vi" ? "là nhà sản xuất" : "is a manufacturer of"}{" "}
              <strong>Titanium Rack Sheet</strong> — {lang === "vi"
                ? "phụ kiện bi-a tối ưu cho CLB & giải đấu. Sản phẩm được chế tác bằng công nghệ dập khuôn tiên tiến, đảm bảo độ chính xác và độ bền."
                : "optimized accessories for billiards clubs & tournaments. Produced with advanced die-cut technology for precision and durability."}
            </p>
            <p>
              {lang === "vi"
                ? "Phân phối toàn quốc, ship COD không cần thanh toán trước. Hỗ trợ đại lý, dự án CLB và giải đấu."
                : "Nationwide distribution with COD; no prepayment. Dealer, club and tournament support available."}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/logo đen.jpg"
              alt="Logo đen"
              className="w-56 h-56 rounded-full bg-gray-50 p-4 border"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Products({ t, add, lang }: any) {
 const unit = lang === "vi" ? "phin" : "sheet";
  return (
    <section id="products" className="py-16 md:py-24">
      <Container>
        <SectionTitle title={t.products_title} subtitle={t.products_sub} />
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <Card key={p.id} className="rounded-3xl overflow-hidden relative">
              {p.badge && (
                <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {t.bestseller}
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  {lang === "vi" ? p.viName : p.enName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-gray-700">
                <Gallery images={p.gallery} title={lang === "vi" ? p.viName : p.enName} />
                <ul className="list-disc pl-5 space-y-1">
                  {(lang === "vi" ? p.viBullets : p.enBullets).map((b: string) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-lg font-bold">
                    {p.price.toLocaleString("vi-VN")} đ / {unit}
                  </div>
                  <Button onClick={() => add(p.id)} className="rounded-xl">
                    {lang === "vi" ? "Thêm vào giỏ" : "Add to cart"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Gallery({ images, title }: any) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
  return (
    <div className="w-full">
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-200">
        <a href={images[idx]} target="_blank" rel="noreferrer" title={title}>
          <img
            src={images[idx]}
            alt={`${title} ${idx + 1}`}
            className="object-cover w-full h-full"
          />
        </a>
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white px-3 py-1 text-sm"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white px-3 py-1 text-sm"
            >
              ›
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-2 flex gap-2 overflow-x-auto">
          {images.map((src: string, i: number) => (
            <button
              key={src}
              onClick={() => setIdx(i)}
              className={`h-14 w-20 shrink-0 rounded-lg overflow-hidden border ${
                i === idx ? "border-black" : "border-transparent"
              }`}
            >
              <img
                src={src}
                alt={`${title} thumb ${i + 1}`}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Pricing({ t, lang }: any) {
  const rows =
    lang === "vi"
      ? [
          { line: "Cao cấp", dealer: "Liên hệ", retail: "50.000 đ" },
          { line: "Phổ thông", dealer: "Liên hệ", retail: "40.000 đ" },
          { line: "Thường", dealer: "Liên hệ", retail: "20.000 đ" },
        ]
      : [
          { line: "Premium", dealer: "Contact", retail: "50,000 VND" },
          { line: "Standard", dealer: "Contact", retail: "40,000 VND" },
          { line: "Economy", dealer: "Contact", retail: "20,000 VND" },
        ];
  return (
    <section id="pricing" className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow={t.pricing}
          title={t.pricing}
          subtitle={t.pricing_note}
        />
        <div className="overflow-hidden rounded-2xl border">
          <table className="w-full text-sm table-fixed">
            <thead className="bg-gray-50">
              <tr className="text-center">
                <th className="w-1/3 px-4 py-3 font-semibold">{t.col_line}</th>
                <th className="w-1/3 px-4 py-3 font-semibold">{t.dealer}</th>
                <th className="w-1/3 px-4 py-3 font-semibold">{t.retail}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r: any, i: number) => (
                <tr
                  key={r.line}
                  className={`text-center ${i % 2 ? "bg-white" : "bg-gray-50/50"}`}
                >
                  <td className="px-4 py-3 font-medium">{r.line}</td>
                  <td className="px-4 py-3">{r.dealer}</td>
                  <td className="px-4 py-3">{r.retail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function Compare({ t, lang }: any) {
  const rows =
    lang === "vi"
      ? [
          {
            line: "Cao cấp",
            material: "PE 0.15 mm",
            colors: "Trắng",
            mode: "9 & 10 bi",
            best: "Thi đấu/CLB",
            price: "50k",
          },
          {
            line: "Phổ thông",
            material: "PP 0.16 mm",
            colors: "Đỏ / Xanh lá / Vàng",
            mode: "9 & 10 bi",
            best: "Luyện tập & CLB",
            price: "40k",
          },
          {
            line: "Thường",
            material: "Giấy C170 0.16 mm",
            colors: "Xanh xám",
            mode: "9 bi",
            best: "Tập cơ bản",
            price: "20k",
          },
        ]
      : [
          {
            line: "Premium",
            material: "PE 0.15 mm",
            colors: "White",
            mode: "9-ball & 10-ball",
            best: "Tournaments / Clubs",
            price: "50k",
          },
          {
            line: "Standard",
            material: "PP 0.16 mm",
            colors: "Red / Green / Yellow",
            mode: "9-ball & 10-ball",
            best: "Practice & Clubs",
            price: "40k",
          },
          {
            line: "Economy",
            material: "C170 paper 0.16 mm",
            colors: "Blue-gray",
            mode: "9-ball",
            best: "Basic practice",
            price: "20k",
          },
        ];
  return (
    <section id="compare" className="py-16 bg-gray-50">
      <Container>
        <SectionTitle title={t.compare_title} subtitle={t.compare_sub} />
        <div className="overflow-hidden rounded-2xl border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left">{t.col_line}</th>
                <th className="px-3 py-3 text-left">{t.col_material}</th>
                <th className="px-3 py-3 text-left">{t.col_colors}</th>
                <th className="px-3 py-3 text-left">{t.col_mode}</th>
                <th className="px-3 py-3 text-left">{t.col_best}</th>
                <th className="px-3 py-3 text-left">{t.col_price}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r: any, i: number) => (
                <tr key={r.line} className={i % 2 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-3 py-3 font-medium">
                    {r.line}{" "}
                    {((lang === "vi" && r.line === "Cao cấp") ||
                      (lang === "en" && r.line === "Premium")) && (
                      <Tag>{t.tag_best}</Tag>
                    )}
                  </td>
                  <td className="px-3 py-3">{r.material}</td>
                  <td className="px-3 py-3">{r.colors}</td>
                  <td className="px-3 py-3">{r.mode}</td>
                  <td className="px-3 py-3">{r.best}</td>
                  <td className="px-3 py-3">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function Packaging({ t }: any) {
  return (
    <section id="packaging" className="py-16">
      <Container>
        <SectionTitle title={t.pack_title} />
        <div className="text-center text-gray-700 text-lg">
          <p>
            <strong>{t.pack_line}</strong>
          </p>
          <p className="mt-2">
            <strong>{t.ship_cod}</strong>
          </p>
        </div>
      </Container>
    </section>
  );
}

function Contact({ t, lang }: any) {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle title={t.contact_title} subtitle={t.contact_sub} />
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="rounded-3xl order-2 lg:order-1">
            <CardHeader>
              <CardTitle>{t.send_req}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Web3Forms (with fetch for UX) */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);

                  // Language
                  const currentLang = (data.get("language") as string) || "vi";

                  // Required by Web3Forms
                  data.set("access_key", "8345c9dc-c93f-4a4a-b37e-a8694a4311af");
                  data.set("subject", "New lead from Titanium Vietnam website");
                  data.set("from_name", "Titanium Vietnam Website");

                  // Honeypot
                  if ((data.get("hp_check") as string) !== "") return;

                  const btn = form.querySelector("button[type=submit]") as HTMLButtonElement;
                  const originText = btn.textContent || t.btn_submit;
                  btn.disabled = true;
                  btn.textContent = originText + "…";

                  try {
                    const res = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: data,
                    }).then((r) => r.json());

                    if (res.success) {
                      alert(currentLang === "en" ? t.alert_sent : t.alert_sent);
                      form.reset();
                    } else {
                      alert(currentLang === "en" ? t.alert_fail : t.alert_fail);
                    }
                  } catch {
                    alert(currentLang === "en" ? t.alert_net : t.alert_net);
                  } finally {
                    btn.disabled = false;
                    btn.textContent = originText;
                  }
                }}
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-3"
              >
                {/* Name */}
                <Input name="name" required placeholder={t.name} />
                {/* Phone/Zalo */}
                <Input name="phone" required placeholder={t.phone} />
                {/* Email */}
                <Input type="email" name="email" placeholder={t.email} />
                {/* Message */}
                <Textarea rows={4} name="message" placeholder={t.message} />

                {/* Hidden fields */}
                <input type="hidden" name="hp_check" />
                <input type="hidden" name="language" value={lang} />
                <input type="hidden" name="site" value="Titanium Vietnam" />
                <input
                  type="hidden"
                  name="access_key"
                  value="8345c9dc-c93f-4a4a-b37e-a8694a4311af"
                />

                <Button type="submit" className="w-full rounded-xl">
                  {t.btn_submit}
                </Button>
                <p className="text-[11px] text-gray-500 text-center">
                  {lang === "vi"
                    ? "* Mẫu gửi sẽ chuyển trực tiếp đến email quản trị của bạn."
                    : "* Submission is sent directly to your admin inbox."}
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="order-1 lg:order-2 space-y-2 text-sm">
            <div>
              <strong>Hotline/Zalo:</strong>{" "}
              <a className="underline" href={`tel:${PHONE_1}`}>
                {PHONE_1}
              </a>{" "}
              –{" "}
              <a className="underline" href={`tel:${PHONE_2}`}>
                {PHONE_2}
              </a>
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a className="underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
            <div>
              <strong>MST:</strong> {MST}
            </div>
            <div>
              <strong>{t.address_label}:</strong> Số 6 Mễ Trì Hạ, Nam Từ Liêm, Hà Nội
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={ZALO_LINK}
                className="inline-flex items-center gap-2 bg-[#0068ff] text-white px-3 py-2 rounded-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Zalo
              </a>
              <a
                href={FB_LINK}
                className="inline-flex items-center gap-2 bg-[#1877f2] text-white px-3 py-2 rounded-lg"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer({ t }: any) {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-3">
          <div>
            © {new Date().getFullYear()} Titanium Vietnam. {t.footer_rights}
          </div>
          <div>
            Hotline: {PHONE_1} / {PHONE_2} • Email: {EMAIL}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-2">
      <a href={`tel:${PHONE_1}`}>
        <Button size="lg" className="rounded-full shadow-xl flex items-center gap-2">
          <Phone className="h-4 w-4" /> {PHONE_1}
        </Button>
      </a>
      <a href={ZALO_LINK} target="_blank" rel="noreferrer">
        <Button
          variant="outline"
          size="lg"
          className="rounded-full shadow-xl flex items-center gap-2 bg-[#0068ff] text-white hover:bg-[#0050cc]"
        >
          <MessageCircle className="h-4 w-4" /> Zalo Chat
        </Button>
      </a>
      <a href={FB_LINK} target="_blank" rel="noreferrer">
        <Button
          variant="outline"
          size="lg"
          className="rounded-full shadow-xl flex items-center gap-2 bg-[#1877f2] text-white hover:bg-[#1459b8]"
        >
          <Facebook className="h-4 w-4" /> Facebook
        </Button>
      </a>
    </div>
  );
}

function CartDrawer({ open, onClose, t, items, subtotal, inc, dec }: any) {
  return (
    <div
      className={`fixed inset-0 z-[70] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="font-semibold">{t.cart}</div>
          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 && (
            <div className="text-sm text-gray-600">{t.emptyCart}</div>
          )}
          {items.map(({ p, qty }: any) => (
            <div key={p.id} className="flex items-center gap-3 border rounded-xl p-3">
              <img
                src={p.gallery[0]}
                alt={p.viName}
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="font-medium">{p.viName}</div>
                <div className="text-xs text-gray-500">
                  {p.price.toLocaleString("vi-VN")} đ
                </div>
                <div className="mt-2 inline-flex items-center gap-2">
                  <button
                    onClick={() => dec(p.id)}
                    className="h-7 w-7 inline-flex items-center justify-center rounded-full border"
                  >
                    -
                  </button>
                  <span className="text-sm w-6 text-center">{qty}</span>
                  <button
                    onClick={() => inc(p.id)}
                    className="h-7 w-7 inline-flex items-center justify-center rounded-full border"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between text-sm text-gray-700">
            <span>{t.subtotal}</span>
            <span className="font-semibold">
              {subtotal.toLocaleString("vi-VN")} đ
            </span>
          </div>
          <Button
            className="w-full rounded-xl"
            onClick={() =>
              alert(
                t.ship_cod
              )
            }
          >
            {t.place_cod}
          </Button>
          <p className="text-xs text-gray-500 text-center">{t.ship_cod}</p>
        </div>
      </div>
    </div>
  );
}
