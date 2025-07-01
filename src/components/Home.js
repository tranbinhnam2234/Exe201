import React from 'react';
import ContactForm from './ContactForm';
import './ContactForm.css';

function Home() {
    return (
        <div style={{ minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column' }}>
            {/* FORM ĐỎ */}
            <section style={{ background: '#d32f2f', padding: '32px 0', borderBottom: '6px solid #000', borderTop: '4px solid #000', display: 'flex', justifyContent: 'center' }}>
                <div style={{ maxWidth: 900, width: '100%' }}>
                    <ContactForm />
                </div>
            </section>

            {/* PHẦN LIÊN HỆ */}
            <section style={{ background: '#000', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 250, position: 'relative', borderBottom: '16px solid #b23b3b' }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button style={{ background: '#d32f2f', color: '#fff', fontWeight: 'bold', fontSize: 22, border: 'none', padding: '28px 48px', borderRadius: 2, cursor: 'pointer', letterSpacing: 1 }}>LIÊN HỆ CHÚNG TÔI</button>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{ background: '#b23b3b', color: '#000', textAlign: 'left', padding: '24px 40px', fontSize: 20, letterSpacing: 2 }}>
                COPYRIGHT 2025 ©
            </footer>
        </div>
    );
}

export default Home;