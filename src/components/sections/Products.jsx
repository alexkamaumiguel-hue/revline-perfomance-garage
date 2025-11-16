import React from 'react';
import './Products.css';
import ImageWithFallback from '../common/ImageWithFallback';

const Products = () => {
  const items = [
    { title: 'Product One', img: '/src/assets/images/product1.jpg' },
    { title: 'Product Two', img: '/src/assets/images/product2.jpg' },
    { title: 'Product Three', img: '/src/assets/images/product3.jpg' },
    { title: 'Product Four', img: '/src/assets/images/product4.jpg' },
    { title: 'Product Five', img: '/src/assets/images/product5.jpg' },
    { title: 'Product Six', img: '/src/assets/images/product6.jpg' },
    { title: 'Product Seven', img: '/src/assets/images/product7.jpg' },
    { title: 'Product Eight', img: '/src/assets/images/product8.jpg' }
  ];

  // products should show all product images (as originally)
  const productItems = items;

  return (
    <section id="products" className="section products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {productItems.map((it, idx) => (
            <div className="product-card" key={idx}>
              <ImageWithFallback src={it.img} alt={it.title} />
            </div>
          ))}
        </div>

        {/* Services section removed */}
      </div>
    </section>
  );
};

export default Products;
