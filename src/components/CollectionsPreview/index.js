import React from 'react';
import CollectionsItemList from '../CollectionsItemList';
import { Link } from 'react-router-dom';
import './index.scss';

export default function CollectionsPreview({ data }) {
  const { title, items, routeName } = data;
  console.log(routeName);
  return (
    <div className="collections-preview">
      <h2>
        <Link to={ routeName }> { title } </Link>
      </h2>
      <CollectionsItemList items={ items } />
    </div>
  );
}