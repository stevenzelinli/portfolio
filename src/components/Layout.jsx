import React from 'react';
import Body from './Body';
import Footer from './footer/Footer';
import Header from './header/Header';
import Menu from './menu/Menu';

const Layout = () => (
    <div>
        <Header />
        <Menu />
        <Body />
        <Footer />
    </div>
);

export default Layout;
