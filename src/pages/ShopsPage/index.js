import React from 'react';
import CollectionsPreview from '../../components/CollectionsPreview';
import data from '../../shop.data';
import './index.scss';

export default function ShopsPage({ match }) {
  const newData = match.params.category ? data.filter(category => category.routeName === match.params.category) : data
  return (
    <main>
      { newData
          .map((category, index) => <CollectionsPreview data={ category } key={ index } maxCount={ match.params.category ? "" : "4"}/>) }
    </main>
  );
}

