import React from 'react';
import './App.css';
import styled from 'styled-components';
import productImageSrc from './product-image.png';

// Variables
const $fontFamily = 'Montserrat';

const ProductWrapper = styled.div`
    max-width: 700px;
    margin: 200px auto 0;
    padding: 0 25px 25px;
    display: flex;
    height: 220px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    justify-content: center;
    align-items: center;
    background:#fff;
`;

const ProductContent = styled.div`
    text-align: left;
    color: #222;
    margin-top: 30px;
    
    h3 {
        font-family: $fontFamily;
        font-size: 40px;
        margin-bottom: 20px;
        margin-top: 0px;
    }
    
    p {
        font-family: $fontFamily;
        font-size: 12px;
        margin-top: 0;
    }
    
    span {
     font-family: $fontFamily;
     font-size: 12px;
     color: #8DE6D7;
     text-transform: uppercase;
     font-weight: 700;
     letter-spacing: 2px;
     margin-bottom: 15px;
    }
`;

const App = () => {
    return <ProductTile />

};

const ProductTile = () => {
    return (
        <div className="product-tile-container">
            <ProductWrapper>
                <img src={productImageSrc} className="product-image" alt=""/>
                <ProductContent>
                    <span>5.8-inch display</span>
                    <h3>iPhone X</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <br/>
                    <div className="pricing-model-wrapper">
                        <PricingModel model="From £47.95/mo. for up to 24 mo."/>
                        <PricingModel model="Or pay now £999"/>
                    </div>
                </ProductContent>
            </ProductWrapper>

            <a href="#" className="preorder-btn">Preorder</a>
        </div>
    );
};

const PricingModel = (props) => {
    const { model } = props;
    return (
        <div className="pricing-model-item">{model}</div>
    );
};

export default App;
