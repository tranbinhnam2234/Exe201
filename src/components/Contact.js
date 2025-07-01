import React from 'react';

function Contact() {
    return (
        <div>
            <section style={{ position: 'relative', minHeight: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/contact-banner.jpg" alt="Contact Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, position: 'absolute', top: 0, left: 0, zIndex: 0 }} onError={e => {e.target.style.display='none'}} />
                <div style={{ position: 'relative', zIndex: 1, padding: 40, color: '#fff', textAlign: 'center' }}>
                    <h1>We love to hear from you</h1>
                </div>
            </section>

            <section className="white-bg" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: 60, padding: 60, color: '#000' }}>
                <div style={{ flex: 1, minWidth: 300, maxWidth: 500 }}>
                    <img src="/map.jpg" alt="Map" style={{ width: '100%', maxWidth: '100%', borderRadius: 12, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} onError={e => {e.target.style.display='none'}} />
                </div>
                <div style={{ flex: 1, minWidth: 280, textAlign: 'left' }}>
                    <h3>Liên hệ chúng tôi</h3>
                    <p style={{ margin: '15px 0' }}>**Điện thoại:** +40740333333</p>
                    <p style={{ margin: '15px 0' }}>**Email:** contact@gymbeastmode.fit</p>
                    <p style={{ margin: '15px 0' }}>**Địa chỉ:** Armoniei, no.16, 4th floor, D10, Bucharest</p>
                    <button className="btn" style={{ marginTop: 30 }}>LIÊN HỆ NGAY</button>
                </div>
            </section>

            <section className="black-bg">
                <h2>Bạn đã sẵn sàng thay đổi?</h2>
                <p>Hãy để chúng tôi giúp bạn đạt được mục tiêu thể chất của mình.</p>
                <button className="btn">GỬI YÊU CẦU TƯ VẤN</button>
            </section>
        </div>
    );
}

export default Contact;