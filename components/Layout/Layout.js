import React from 'react';
import Footer from './Footer';
import Head from 'next/head';
import { Header } from '@components/Generals/Header';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Head>
                <title>Avo Platzi</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
