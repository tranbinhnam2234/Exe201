import React from 'react';

function Footer() {
    return (
        <footer>
            <div style={{ margin: '0 auto 20px auto', width: 100 }}>
                {/* Thay src bằng đường dẫn ảnh logo nếu có */}
                <img src="/logo.png" alt="Beastmode Logo" style={{ width: '100%' }} onError={e => {e.target.style.display='none'}} />
            </div>
            <div>COPYRIGHT 2025 © BEASTMODE GYM. ALL RIGHTS RESERVED.</div>
            <div style={{ marginTop: 10, fontSize: '0.8em', color: '#888' }}>
                Thiết kế bởi: [Tên của bạn/Công ty]
            </div>
        </footer>
    );
}

export default Footer;