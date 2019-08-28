import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Menu from './menu/Menu';
import HomePage from './home/HomePage';

const Layout = () => (
    <div>
        <Header />
        <Menu />
        <HomePage />
        <Footer />
    </div>
);

export default Layout;
