import React from 'react';
import Footer from '../common/Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const Home = () => {
    document.title = 'Home';
    return (
        <>
            <Header />
            <Main/>
            <Footer/>
        </>
    );
};

export default Home;