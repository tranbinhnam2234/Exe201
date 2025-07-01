import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className="app-container">
            <Header />
            <main>{children}</main> {/* Main content area */}
            <Footer />
        </div>
    );
}

export default Layout;