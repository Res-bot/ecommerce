import React from 'react';
import Banner from '../component/Banner';
import ProductList from '../features/product/ProductList';
import Footer from '../component/Footer'; 
import './Home.css';

const Home = () => (
  <div className="home-container">
    <Banner />
    <section className="home-products-section">
      <ProductList />
    </section>
    <Footer /> 
  </div>
);

export default Home;
