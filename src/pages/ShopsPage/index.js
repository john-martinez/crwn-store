import React from 'react';
import CollectionsPreview from '../../components/CollectionsPreview';
import data from '../../shop.data';
import './index.scss';

export default function ShopsPage({ match }) {
  return (
    <main>
      { data.map((category, index) => <CollectionsPreview data={ category } key={ index } />) }
    </main>
  );
}

