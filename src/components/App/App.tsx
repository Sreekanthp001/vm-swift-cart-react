import { useEffect, useState } from 'react';

import Loader from 'components/Loader';
import Filter from 'components/Filter';
import Products from 'components/Products';
import Cart from 'components/Cart';

import { useProducts } from 'contexts/products-context';

import * as S from './style';

function App() {
  const { isFetching, products, fetchProducts } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Search Logic: Filtering products based on VentureMond user input
  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <S.Container>
      {isFetching && <Loader />}
      
      {/* Branding Header */}
      <div style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1', marginBottom: '20px' }}>
         <h1 style={{ letterSpacing: '2px' }}>VENTUREMOND</h1>
         <p>Modern E-commerce Interface</p>
      </div>

      <S.TwoColumnGrid>
        <S.Side>
          <Filter />
          {/* Custom Search Input */}
          <div style={{ marginTop: '20px', padding: '0 10px' }}>
            <label style={{ fontWeight: 'bold' }}>Search Products:</label>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
        </S.Side>
        
        <S.Main>
          <S.MainHeader>
            <p style={{ fontWeight: 'bold' }}>{filteredProducts?.length} Product(s) found in VentureMond Store</p>
          </S.MainHeader>
          {/* Passing filtered products instead of all products */}
          <Products products={filteredProducts} />
        </S.Main>
      </S.TwoColumnGrid>
      <Cart />
    </S.Container>
  );
}

export default App;