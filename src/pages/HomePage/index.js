import React from 'react';
import data from '../../directory.data';
import ImageCard from '../../components/ImageCard';
import './index.scss';

export default function HomePage() {
  return (
    <main className="homepage">
      <div className="homepage__row">
        { data.slice(0,3).map(card=> {
          const { title, imageUrl, id, linkUrl } = card;
          return <ImageCard 
            key={ id }
            title={ title }
            imgUrl={ imageUrl }
            linkUrl={ linkUrl }
          />
        })}
      </div>
      <div className="homepage__row homepage__row--large">
        { data.slice(3,data.length).map(card=> {
            const { title, imageUrl, id, linkUrl } = card;
            return <ImageCard 
              key={ id }
              title={ title }
              imgUrl={ imageUrl }
              linkUrl={ linkUrl }
            />
          })}
      </div>
    </main>
  );
}