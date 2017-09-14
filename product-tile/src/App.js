import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import productImageSrc from './product-image.png';

const ProductWrapper = styled.div`
    max-width: 700px;
    margin: 90px auto 50px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProductContent = styled.div`
    text-align: left;
    color: #fff;
    
    h3 {
        font-family: "Montserrat";
        font-size: 40px;
        margin-bottom: 10px;
    }
    
    p {
        font-family: "Montserrat";
        font-size: 12px;
    }
`;



class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductTile />
      </div>
    );
  }
}

const ProductTile = () => {
    return (
        <ProductWrapper>
            <img src={productImageSrc} className="product-image" alt=""/>
            <ProductContent>
                <h3>iPhone X</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at debitis deleniti dignissimos hic iste
                    neque nobis.</p>
                <a href="#" className="buy-btn">Buy now</a>
            </ProductContent>
        </ProductWrapper>
    );
};

export default App;
