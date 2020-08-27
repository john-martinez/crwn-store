import React from 'react';
import './index.scss';

export default function ImageCard ({ imgUrl, title, linkUrl }) {
  console.log(imgUrl)
  return (
    <div className="image-card">
      <div className="image-card__background">
        <img 
          src={ imgUrl } 
          alt={ title }
        />
      </div>
      <div className="image-card__content">
        <h2>{ title }</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
}