import React from 'react';
import './index.scss';

export default function Collectionsitem({ item }) {
  const { imageUrl, name, price } = item;

  return (
    <div className="collections-item">
      <div className="collections-item__image">
        <img src={ imageUrl } alt={ name }/>
        <div className="collections-item__image-overlay">
          <div className="collections-item__image-overlay-content">
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="collections-item__content">
        <p>{ name }</p>
        <p>${ price }</p>
      </div>
    </div>
  )
}