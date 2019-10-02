import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Categories from './components/Categories';
import TopSelling from './components/TopSelling';
//import Partner from './components/Partner';
function App() {
  return (
    <React.Fragment>      
        <Header></Header>
        <div className="container">
          <Slider></Slider>
          <Categories></Categories>        
          <TopSelling></TopSelling>
        </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
