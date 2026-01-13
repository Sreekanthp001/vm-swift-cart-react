import { IProduct } from 'models';
import Product from './Product';
import * as S from './style';

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  return (
    <S.Container>
      {/* VentureMond Branding Header */}
      <div style={{ width: '100%', padding: '10px 20px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#111' }}>VentureMond Exclusive Collection</h2>
        <p style={{ color: '#777', fontSize: '14px' }}>
          {products?.length} Product(s) found
        </p>
      </div>

      {products?.length > 0 ? (
        products.map((p) => (
          <Product product={p} key={p.sku} />
        ))
      ) : (
        <div style={{ textAlign: 'center', width: '100%', padding: '50px' }}>
          <h3>No products found in VentureMond store.</h3>
        </div>
      )}
    </S.Container>
  );
};

export default Products;