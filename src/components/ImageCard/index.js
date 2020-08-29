import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const ImageCard = ({ imgUrl, title, linkUrl, history }) => {
  return (
    <div className="image-card" onClick={ ()=>history.push( linkUrl ) }>
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

export default withRouter(ImageCard);