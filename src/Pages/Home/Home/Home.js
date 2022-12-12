import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import HistoryTable from '../HistoryTable/HistoryTable';

const Home = () => {
    return (
        <div  style={{backgroundColor:"#EEF2FE"}}>
          {/* <Header></Header>  */}
          <Banner></Banner>
          <HistoryTable></HistoryTable> 
          <Footer></Footer>

        </div>
    );
};

export default Home;