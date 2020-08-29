import React from 'react';
import { Link } from 'react-router-dom';

export default function CollectionsPreview({ data }) {
  const { title, items, route } = data;
  console.log( data);
  return (
    <div className="collections-preview">
      <h2>
        <Link to={ route }> { title } </Link>
      </h2>
    </div>
  );
}