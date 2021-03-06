import React from "react";
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/product/:id" component={ProductScreen}/>
        <Route path="/cart/:id?" exact component={CartScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
