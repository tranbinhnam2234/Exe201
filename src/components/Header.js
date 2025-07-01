import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Keep this for specific header styles
import beastmodeLogo from '../img/beastmode.png';

function Header() {
    return (
        <nav>
            <div className="logo">
                <img src={beastmodeLogo} alt="Beastmode Logo" style={{ height: 48 }} />
            </div>
            <div>
                <NavLink to="/" end>TRANG CHỦ</NavLink>
                <NavLink to="/ve-chung-toi">VỀ CHÚNG TÔI</NavLink>
                <NavLink to="/ket-qua">KẾT QUẢ</NavLink>
                <NavLink to="/san-pham">SẢN PHẨM</NavLink>
                <NavLink to="/mat-hang">MẶT HÀNG</NavLink>
                <NavLink to="/muc-gia">MỨC GIÁ</NavLink>
                <NavLink to="/lien-he">LIÊN HỆ</NavLink> {/* Added Contact link */}
            </div>
        </nav>
    );
}

export default Header;