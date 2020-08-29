import React from 'react';
import './index.scss';

export default function ShopsPage({ match }) {
  return (
    <main>
      { match.params.category }
    </main>
  );
}

