import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  
  const listItems = [
    <li><a href="/#">Inicio</a></li>,
    <li><a href="/#">Sobre nosotros</a></li>,
    <li><a href="/#">Contacto</a></li>,
    <li><a href="/#">Nuevo Menu</a></li>
  ];

  return (
    <div className="App">
      <Header />
      <Menu Menu={listItems} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
