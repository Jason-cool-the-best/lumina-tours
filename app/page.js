 "use client";

import { useState } from "react";

const destinations = [
  {
    name: "Đà Nẵng",
    eyebrow: "THÀNH PHỐ BÊN SÔNG HÀN",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
    description: "Bắt đầu hành trình tại thành phố biển năng động, khám phá Ngũ Hành Sơn và những dấu ấn văn hóa Chăm.",
    places: ["Ngũ Hành Sơn", "Bảo tàng Điêu khắc Chăm", "Cầu Rồng", "Chợ Hàn"]
  },
  {
    name: "Hội An",
    eyebrow: "NÉT XƯA PHỐ HỘI",
    image: "https://images.unsplash.com/photo-1701397955118-79059690ef50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "Dạo bước giữa những mái nhà vàng, hội quán cổ kính, trải nghiệm thuyền thúng và vẻ đẹp lung linh bên sông Hoài.",
    places: ["Phố cổ Hội An", "Chùa Cầu", "Rừng dừa Bảy Mẫu", "Làng gốm và làng lụa"]
  },
  {
    name: "Huế",
    eyebrow: "DẤU ẤN CỐ ĐÔ",
    image: "https://images.unsplash.com/photo-1664333039578-28ad613ee536?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "Tìm về không gian kinh thành xưa, những ngôi chùa trầm mặc và nét văn hóa đặc sắc của vùng đất cố đô.",
    places: ["Đại Nội Huế", "Chùa Thiên Mụ", "Lăng Khải Định", "Làng hương Thủy Xuân", "Trường Quốc Học Huế"]
  },
  {
    name: "Quảng Trị",
    eyebrow: "MIỀN DI SẢN VÀ KÝ ỨC",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
    description: "Lắng nghe câu chuyện lịch sử tại những địa danh cách mạng, đồng thời khám phá thiên nhiên kỳ vĩ của khu vực Quảng Bình cũ.",
    places: ["Thành cổ Quảng Trị", "Địa đạo Vịnh Mốc", "Nghĩa trang Trường Sơn", "Hiền Lương – Bến Hải", "Phong Nha – Kẻ Bàng", "Vũng Chùa – Đảo Yến"]
  }
];

const foods = [
  { name: "Mì Quảng", region: "Đà Nẵng", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=85" },
  { name: "Cao lầu", region: "Hội An", image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=85" },
  { name: "Bánh bèo – nậm – lọc", region: "Huế", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85" },
  { name: "Bánh canh cá lóc", region: "Quảng Trị", image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=85" }
];

const services = [
  { icon: "✈", title: "Hàng không", text: "Vietjet Air – chặng bay đi Đà Nẵng và chặng về từ Đồng Hới." },
  { icon: "🚆", title: "Tàu di sản miền Trung", text: "Tàu HĐ2, toa VIP số 3; hành trình qua đèo Hải Vân và dừng tại ga Lăng Cô." },
  { icon: "🚌", title: "Xe giường nằm", text: "Tuyến Huế – Quảng Trị với xe Tân Quang Dũng." },
  { icon: "🏨", title: "Lưu trú", text: "Corner Central Danang City Hotel, Rosaleen Hotel và Hòa Bình Hotel." },
  { icon: "🎁", title: "Quà tặng", text: "Nón Lumina Tours, thẻ hành lý, nước uống và khăn lạnh hằng ngày." },
  { icon: "🛡", title: "Bảo hiểm du lịch", text: "Bảo hiểm trong 6 ngày, hỗ trợ SOS 24/7 theo điều kiện chương trình." }
];

const discounts = [
  ["Đối tượng chính sách theo chương trình", "Mức ưu đãi đến 60%"],
  ["Thân nhân liệt sĩ đủ điều kiện", "Mức ưu đãi 35%"],
  ["Gia đình chính sách đi cùng nhóm", "Ưu đãi nhóm 10–15%"],
  ["Các dịp lễ theo chương trình", "Ưu đãi theo thời điểm 10–15%"]
];

function SectionHeading({ kicker, title, subtitle, light = false }) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Lumina Tours - Trang chủ">
          <img src="/logo.png" alt="Logo Lumina Tours" />
          <span><strong>LUMINA</strong><small>TOURS · DU LỊCH DI SẢN</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu" aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {[
            ["Trang chủ", "#home"], ["Điểm đến", "#destinations"], ["Ẩm thực", "#cuisine"],
            ["Dịch vụ", "#services"], ["Giá tour", "#pricing"], ["Liên hệ", "#contact"]
          ].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Đặt tour <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="hero-label"><i></i> LUMINA TOURS PRESENTS</span>
            <h1>Ba miền đất.<br /><em>Một hành trình.</em></h1>
            <p>Chạm vào vẻ đẹp di sản, văn hóa và thiên nhiên miền Trung Việt Nam qua hành trình 6 ngày đáng nhớ.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#destinations">Khám phá hành trình <span>→</span></a>
              <a className="text-link" href="#pricing">Xem giá tour <span>↗</span></a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>ĐÀ NẴNG <b>—</b> HỘI AN <b>—</b> HUẾ <b>—</b> QUẢNG TRỊ</span>
            <span>06 NGÀY · MIỀN TRUNG VIỆT NAM</span>
          </div>
        </section>

        <section className="intro section-wrap">
          <div className="intro-mark">L</div>
          <div className="intro-copy">
            <span className="kicker">LỜI MỜI KHÁM PHÁ</span>
            <h2>Một dải đất,<br /><em>ngàn câu chuyện.</em></h2>
          </div>
          <div className="intro-text">
            <p>Từ nhịp sống trẻ trung của Đà Nẵng, nét cổ kính của Hội An đến chiều sâu văn hóa cố đô Huế và những miền ký ức lịch sử tại Quảng Trị, mỗi điểm dừng chân đều mở ra một câu chuyện riêng.</p>
            <p>Lumina Tours đưa bạn đi qua cảnh sắc thiên nhiên, di sản kiến trúc và những trải nghiệm đậm chất miền Trung — để chuyến đi không chỉ là hành trình khám phá, mà còn là dịp cảm nhận và lưu giữ những điều đáng nhớ.</p>
          </div>
        </section>

        <section className="destinations section-wrap" id="destinations">
          <SectionHeading kicker="THE JOURNEY" title="Bốn điểm đến. Vô vàn điều để nhớ." subtitle="Khám phá những dấu ấn nổi bật trên cung đường di sản miền Trung." />
          <div className="destination-grid">
            {destinations.map((item, index) => (
              <article className={`destination-card destination-${index + 1}`} key={item.name}>
                <img src={item.image} alt={`Cảnh quan ${item.name}`} loading="lazy" />
                <div className="destination-shade"></div>
                <div className="destination-content">
                  <span>{item.eyebrow}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="place-tags">{item.places.map(place => <span key={place}>{place}</span>)}</div>
                </div>
                <b className="destination-number">0{index + 1}</b>
              </article>
            ))}
          </div>
          <p className="small-note">* Các điểm tham quan thuộc khu vực Quảng Bình trước sắp xếp đơn vị hành chính được giới thiệu trong nhóm điểm đến Quảng Trị theo nội dung chương trình.</p>
        </section>

        <section className="quote-band">
          <div className="quote-inner">
            <span className="kicker">MORE THAN A TRIP</span>
            <p>“Đi để thấy, để hiểu,<br /><em>và để thương hơn từng miền đất Việt.”</em></p>
          </div>
        </section>

        <section className="cuisine section-wrap" id="cuisine">
          <SectionHeading kicker="TASTE OF CENTRAL VIETNAM" title="Hương vị kể chuyện miền Trung." subtitle="Ghé qua miền di sản cũng là dịp thưởng thức những món ngon mang dấu ấn từng vùng đất." />
          <div className="food-grid">
            {foods.map(food => (
              <article className="food-card" key={food.name}>
                <div className="food-image"><img src={food.image} alt={food.name} loading="lazy" /><span>{food.region}</span></div>
                <h3>{food.name}</h3>
              </article>
            ))}
          </div>
          <p className="small-note">Hình ảnh món ăn mang tính minh họa; thực đơn thực tế theo chương trình và điều kiện phục vụ.</p>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <SectionHeading kicker="TRAVEL WITH COMFORT" title="An tâm trên từng chặng đường." subtitle="Những dịch vụ và tiện ích được chuẩn bị để hành trình thêm thuận tiện." />
            <div className="service-grid">
              {services.map(service => (
                <article className="service-card" key={service.title}>
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
            <div className="hotel-strip">
              <div><span className="kicker">ACCOMMODATION</span><h3>Không gian nghỉ ngơi<br />sau mỗi ngày khám phá.</h3></div>
              <div className="hotel-names">
                <span>01 <b>Corner Central Danang City Hotel</b></span>
                <span>02 <b>Rosaleen Hotel · Huế</b></span>
                <span>03 <b>Hòa Bình Hotel · Quảng Trị</b></span>
              </div>
            </div>
            <p className="small-note">Thông tin loại phòng, tiện nghi cụ thể sẽ được cập nhật sau khi xác nhận với cơ sở lưu trú.</p>
          </div>
        </section>

        <section className="pricing section-wrap" id="pricing">
          <SectionHeading kicker="TOUR INFORMATION" title="Giá tour & ưu đãi." subtitle="Thông tin giá theo chương trình tour 6 ngày. Vui lòng liên hệ để xác nhận tình trạng chỗ và điều kiện áp dụng." />
          <div className="price-layout">
            <div className="price-main">
              <span className="kicker">GIÁ TOUR NGƯỜI LỚN</span>
              <div className="price">11.500.000<span>₫</span></div>
              <p>/ khách · Từ 10 tuổi trở lên</p>
              <div className="price-rule"></div>
              <div className="price-detail"><span>Trẻ từ 5 đến dưới 10 tuổi</span><strong>8.625.000₫</strong></div>
              <div className="price-detail"><span>Trẻ từ 2 đến dưới 5 tuổi</span><strong>5.750.000₫</strong></div>
              <a href="#contact" className="button button-blue">Tư vấn & đặt tour <span>→</span></a>
            </div>
            <div className="discount-panel">
              <span className="kicker">SPECIAL OFFERS</span>
              <h3>Ưu đãi dành cho<br /><em>những hành trình đặc biệt.</em></h3>
              {discounts.map(([name, value]) => <div className="discount-row" key={name}><span>{name}</span><strong>{value}</strong></div>)}
              <p className="small-note">Ưu đãi có điều kiện áp dụng, yêu cầu giấy tờ chứng minh và có thể không cộng dồn. Vui lòng liên hệ Lumina Tours để được tư vấn.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-bg"></div>
          <div className="contact-inner section-wrap">
            <div className="contact-copy">
              <span className="kicker">LET'S PLAN YOUR JOURNEY</span>
              <h2>Sẵn sàng cho<br /><em>một hành trình đáng nhớ?</em></h2>
              <p>Để lại thông tin, Lumina Tours sẽ liên hệ tư vấn về chương trình và các điều kiện đặt tour.</p>
              <div className="contact-brand"><img src="/logo.png" alt="" /><span><b>LUMINA TOURS</b><small>BA MIỀN ĐẤT – MỘT HÀNH TRÌNH</small></span></div>
            </div>
            <form className="booking-form" onSubmit={handleSubmit}>
              <h3>Gửi yêu cầu tư vấn</h3>
              <p>Thông tin của bạn</p>
              <label>Họ và tên<input name="name" placeholder="Nguyễn Văn A" required /></label>
              <label>Số điện thoại<input name="phone" type="tel" placeholder="09xx xxx xxx" required /></label>
              <div className="form-row">
                <label>Số khách<input name="guests" type="number" min="1" defaultValue="1" required /></label>
                <label>Ngày khởi hành<input name="date" type="date" /></label>
              </div>
              <label>Ghi chú<textarea name="message" rows="3" placeholder="Bạn muốn tìm hiểu thêm điều gì?"></textarea></label>
              <button className="button button-gold form-submit" type="submit">Gửi yêu cầu <span>→</span></button>
              {submitted && <div className="form-success" role="status">Cảm ơn bạn! Đây là biểu mẫu minh họa, chưa gửi dữ liệu đến hệ thống đặt tour. Hãy liên hệ trực tiếp với Lumina Tours để xác nhận.</div>}
              <small className="form-privacy">Biểu mẫu demo cho dự án website. Chưa thu thập hoặc lưu trữ thông tin.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main section-wrap">
          <a className="brand footer-brand" href="#home"><img src="/logo.png" alt="Lumina Tours" /><span><strong>LUMINA</strong><small>TOURS · DU LỊCH DI SẢN</small></span></a>
          <p>Ba miền đất – Một hành trình.<br />Cùng Lumina Tours khám phá vẻ đẹp miền Trung.</p>
          <div className="footer-links"><a href="#destinations">Điểm đến</a><a href="#services">Dịch vụ</a><a href="#pricing">Giá tour</a><a href="#contact">Liên hệ</a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© 2026 LUMINA TOURS. WEBSITE DEMO FOR EDUCATIONAL PURPOSES.</span><a href="#home">LÊN ĐẦU TRANG ↑</a></div>
      </footer>
    </>
  );
}
