import React from 'react';
import CollectionsItem from '../CollectionsItem';
import './index.scss';

export default function CollectionsItemList({ items }){
  return (
    <div className="collections-item-list">
      { items.slice(0,4).map((item, i) => <CollectionsItem key={ i } item={ item } /> )}
    </div>
  )
}