import React from 'react';

function Shop() {
    return (
        <div>
            <section>
                <h2>TRANG PHỤC & PHỤ KIỆN TẬP LUYỆN</h2>
                <p style={{ fontSize: '1.1em', maxWidth: 800, margin: '20px auto 40px auto' }}>Tăng cường hiệu suất và phong cách của bạn với bộ sưu tập trang phục và phụ kiện tập luyện cao cấp của chúng tôi.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap', margin: '24px 0' }}>
                    {["GĂNG TAY", "BÌNH NƯỚC", "QUẦN ÁO", "ÁO THUN", "DÂY KHÁNG LỰC", "DÂY NHẢY", "PHỤ KIỆN KHÁC"].map((name, i) => (
                        <div key={i} style={{ textAlign: 'center', background: '#1a1a1a', padding: 15, borderRadius: 12, boxShadow: '0 4px 15px rgba(0,0,0,0.2)', width: 140 }}>
                            <img src={`/wear${i+1}.jpg`} alt={name} style={{ width: 90, height: 90, borderRadius: 8, objectFit: 'cover', border: '2px solid #c8102e' }} onError={e => {e.target.style.display='none'}} />
                            <h3 style={{ color: '#c8102e', marginTop: 15, fontSize: '1.1em' }}>{name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="red-bg">
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 48, padding: 20, borderRadius: 12, margin: '24px auto', maxWidth: 600, border: '3px dashed #fff' }}>SALE 30/4 & 1/5!</div>
                <p style={{ fontSize: '1.2em', marginBottom: 40 }}>Giảm giá lớn cho tất cả các mặt hàng nhân dịp Lễ.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15, justifyContent: 'center' }}>
                    {/* Placeholder for sale items, ideally these would be actual product images */}
                    {[...Array(12)].map((_, i) => (
                        <div key={i} style={{ width: 100, height: 100, background: '#eee', borderRadius: 8, margin: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
                            Item {i+1}
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ textAlign: 'left', maxWidth: 800, margin: '50px auto', padding: '0 20px' }}>
                <h3 style={{ color: '#c8102e', fontSize: '1.8em' }}>PHỤ KIỆN THỂ THAO, PHÒNG TẬP - CHỈ CÓ Ở HỆ THỐNG CỦA CHÚNG TÔI</h3>
                <p style={{ fontSize: '1.1em', lineHeight: 1.8, color: '#aaa' }}>
                    Chúng tôi tự hào cung cấp một loạt các phụ kiện thể thao chất lượng cao được thiết kế để nâng cao trải nghiệm tập luyện của bạn. Từ những chiếc găng tay bền bỉ bảo vệ đôi tay, bình nước tiện lợi giữ cho bạn đủ nước, đến các loại quần áo tập luyện thoáng khí và thoải mái, mọi sản phẩm đều được chọn lọc kỹ lưỡng để đảm bảo hiệu suất và độ bền. Hãy ghé thăm cửa hàng của chúng tôi để khám phá những món đồ không thể thiếu cho mỗi buổi tập!
                </p>
            </section>

            <section className="black-bg">
                <h2>Bạn muốn xem trực tiếp các mặt hàng?</h2>
                <p>Ghé thăm cửa hàng Beastmode Gym gần nhất!</p>
                <button className="btn">LIÊN HỆ CHÚNG TÔI</button>
            </section>
        </div>
    );
}

export default Shop;