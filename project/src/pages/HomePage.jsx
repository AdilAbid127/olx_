import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryGrid from '../components/CategoryGrid';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
import { products } from '../data/products';

const HomePage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Pakistan');

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation !== 'Pakistan') {
      filtered = filtered.filter(product =>
        product.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedLocation]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const handleCategorySelect = (categorySlug) => {
    const categoryProducts = products.filter(product => 
      product.category === categorySlug
    );
    setFilteredProducts(categoryProducts);
  };

  const getMobilePhones = () => filteredProducts.filter(p => p.category === 'mobiles').slice(0, 4);
  const getCars = () => filteredProducts.filter(p => p.category === 'vehicles').slice(0, 4);
  const getElectronics = () => filteredProducts.filter(p => p.category === 'electronics').slice(0, 4);
  const getBikes = () => filteredProducts.filter(p => p.category === 'bikes').slice(0, 4);

  return (
    <div className="min-vh-100 bg-light">
      <Header onSearch={handleSearch} onLocationChange={handleLocationChange} />
      <Banner />
      <CategoryGrid onCategorySelect={handleCategorySelect} />
      
      {getMobilePhones().length > 0 && (
        <ProductSection
          title="Mobile Phones"
          products={getMobilePhones()}
          viewAllLink="/category/mobiles"
        />
      )}
      
      {getCars().length > 0 && (
        <ProductSection
          title="Cars"
          products={getCars()}
          viewAllLink="/category/vehicles"
        />
      )}
      
      {getBikes().length > 0 && (
        <ProductSection
          title="Bikes & Motorcycles"
          products={getBikes()}
          viewAllLink="/category/bikes"
        />
      )}
      
      {getElectronics().length > 0 && (
        <ProductSection
          title="Electronics & Home Appliances"
          products={getElectronics()}
          viewAllLink="/category/electronics"
        />
      )}

      <Footer />
    </div>
  );
};

export default HomePage;