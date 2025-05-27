import React from 'react';
import Banner from '../component/Banner';
import ProductList from '../features/product/ProductList';
import Footer from '../component/Footer'; // Import Footer component
import './Home.css';

const Home = () => (
  <div className="home-container">
    <Banner />
    <section className="home-products-section">
      <ProductList />
    </section>
    <Footer /> {/* Add Footer at the bottom */}
  </div>
);

export default Home;
