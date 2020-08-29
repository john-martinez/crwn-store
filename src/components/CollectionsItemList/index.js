import React from 'react';
import CollectionsItem from '../CollectionsItem';
import './index.scss';

export default function CollectionsItemList({ items, maxCount }){
  const newItems = maxCount ? items.slice(0,maxCount) : items
  
  return (
    <div className="collections-item-list">
      { newItems.map((item) => <CollectionsItem key={ item.id } item={ item } /> )}
    </div>
  )
}