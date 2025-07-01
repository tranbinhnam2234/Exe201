import React from "react";
import gangtay   from "../img/gangtay-Photoroom.png";
import dailung   from "../img/dailung-Photoroom.png";
import binhnuoc  from "../img/binhnuoc-Photoroom.png";
import daynhay   from "../img/daynhay.webp";
import aothun    from "../img/aothun-Photoroom.png";
import quanao    from "../img/quanao.webp";          // (chưa dùng trong layout, nhưng giữ lại đúng yêu cầu)
import daykhangluc from "../img/daykhangluc-Photoroom.png";
import candientu   from "../img/candientu-Photoroom.png";

const categories = [
  { name: "GĂNG TAY",       img: gangtay,    bg: "#f8bfc2" },
  { name: "ĐAI",            img: dailung,    bg: "#bcd6f7" },
  { name: "BÌNH NƯỚC",      img: binhnuoc,   bg: "#f8bfc2" },
  { name: "GLOVES",         img: daynhay,    bg: "#ffe07a" },
  { name: "ÁO",             img: aothun,     bg: "#f8bfc2" },
  { name: "CÂN ĐIỆN TỬ",    img: candientu,  bg: "#bcd6f7" },
  { name: "DÂY KHÁNG LỰC",  img: daykhangluc,bg: "#bcbcf7" },
];

export default function Products() {
  /* ---------- COLOR MAP ---------- */
  const cl = {
    red: "#c8102e",
    redDark: "#b92634",
    greyBox: "#d9d9d9",
    text: "#000",
  };

  /* ---------- SMALL BUILDING BLOCKS ---------- */
  const CategoryCard = ({ cat }) => (
    <div style={{ textAlign: "center" }}>
      <div style={{
        width: 150, height: 130, background: cat.bg, borderRadius: 18,
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto"
      }}>
        <img src={cat.img} alt={cat.name} style={{ width: 100, height: 100, objectFit: "contain" }} />
      </div>
      <div style={{ marginTop: 14, fontWeight: 600, fontSize: 18 }}>{cat.name}</div>
    </div>
  );

  const GreyBox = () => (
    <div style={{
      width: 110, height: 110, background: cl.greyBox,
      marginBottom: 24, borderRadius: 4
    }} />
  );

  /* ---------- JSX ---------- */
  return (
    <div style={{ background: "#fff", color: cl.text, minHeight: "100vh", fontFamily: "'Be Vietnam Pro','Montserrat',Arial,sans-serif" }}>

      {/* ===== TITLE ================================================= */}
      <h1 style={{ textAlign: "center", fontWeight: 700, fontSize: 32, letterSpacing: 2, margin: "32px 0 24px" }}>
        GYM WEAR
      </h1>

      {/* ===== CATEGORY BAR ========================================== */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 40, maxWidth: 1100, margin: "0 auto" }}>
        {categories.slice(0, 5).map((cat, i) => <CategoryCard key={i} cat={cat} />)}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 40, maxWidth: 1100, margin: "32px auto 0" }}>
        {categories.slice(5).map((cat, i) => <CategoryCard key={i} cat={cat} />)}
      </div>

      {/* ===== OPTIONAL BANNER (the mock-up dùng hình nhảy dây) ======= */}
      <div style={{ width: 700, maxWidth: "95vw", margin: "40px auto 0", borderRadius: 8, overflow: "hidden" }}>
        <img src={daynhay} alt="Banner" style={{ width: "100%", height: 260, objectFit: "cover" }} />
      </div>

      {/* ===== SALE BLOCK =========================================== */}
      <div style={{ display: "flex", justifyContent: "center", margin: "64px 0 32px", gap: 8 }}>
        {["S", "A", "L", "E", "30/4"].map((l, idx) => (
          <div key={idx} style={{
            background: cl.red,
            color: "#fff",
            fontWeight: "bold",
            fontSize: idx === 4 ? 28 : 40,
            width: idx === 4 ? 100 : 80,
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6
          }}>{l}</div>
        ))}
      </div>

      {/* ===== PRODUCT GRID (placeholder) ============================ */}
      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto 80px", padding: "0 40px" }}>
        {/* 2 đơn giản “đường kẻ” (như mock-up) */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "#aaa", transform: "translateX(150px)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 1, background: "#aaa", transform: "translateY(80px)" }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(110px,1fr))",
          gap: 24,
          justifyItems: "center"
        }}>
          {Array.from({ length: 12 }).map((_, i) => <GreyBox key={i} />)}
        </div>
      </div>

      {/* ===== DESCRIPTION TEXT ===================================== */}
      <div style={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.6, letterSpacing: .4 }}>
        <p style={{ textAlign: "justify", marginBottom: 28 }}>
          Dần dần, mọi người đã nhận thức được tầm quan trọng của việc tập thể dục trong cuộc sống hằng
          ngày. Khi Covid xuất hiện, ai cũng mong muốn có một sức khỏe tốt để có thể chống lại các bệnh tật
          xung quanh chúng ta mỗi ngày. Có nhiều phương pháp tập luyện như đi tập gym, chạy bộ, bơi lội
          và chơi bóng đá để cải thiện sức khỏe. Nhưng cũng với bộ, để có thể tập luyện dễ dàng, hiệu quả
          và tránh những rủi ro không đáng có, chắc chắn bạn không thể thiếu những trợ thủ đắc lực — đó
          chính là các phụ kiện thể thao, gym.
        </p>
        <p style={{ textAlign: "justify" }}>
          Hiện nay, các phụ kiện thể thao và gym rất đa dạng, với nhiều thiết kế khác nhau và mỗi sản phẩm
          mang đến những công dụng cũng như lợi ích riêng nhằm hỗ trợ việc tập luyện hiệu quả. Vì thế, đặc
          biệt đối với những người mới tập luyện, việc cân nhắc kỹ lưỡng khi chọn lựa các phụ kiện thể thao
          và gym phù hợp là vô cùng cần thiết. Do đó, Beastmode luôn cố gắng mang đến cho bạn những lựa
          chọn tốt nhất để mua các phụ kiện thể thao và gym chính hãng, uy tín với mức giá tốt nhất có thể.
        </p>
      </div>

      {/* ===== CONTACT SECTION ====================================== */}
      <div style={{ height: 8, background: cl.red }} />
      <section style={{ background: "#000", padding: "120px 0" }}>
        <div style={{ width: "90%", maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center" }}>
          <button style={{
            background: cl.red,
            border: "none",
            padding: "26px 90px",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: 1,
            cursor: "pointer"
          }}>
            LIÊN HỆ<br />CHÚNG TÔI
          </button>
        </div>
      </section>

      {/* ===== FOOTER =============================================== */}
      <footer style={{ background: cl.redDark, padding: "26px 10%", display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, fontSize: ".9rem", letterSpacing: 1, flex: 1 }}>COPYRIGHT&nbsp;2025&nbsp;©</p>
        {/* logo dưới footer (đường dẫn giữ nguyên nếu đã có) */}
        <img src="/logo.png" alt="Beastmode" style={{ height: 60 }} />
      </footer>
    </div>
  );
}
