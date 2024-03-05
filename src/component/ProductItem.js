import React from 'react';

const ProductItem = ({ dynamicSlug, productName }) => {
    return (
      <li className="product-item">
        <img className="product-image" src={`images/products/${dynamicSlug}`} alt={`${productName} - Product`} />
        <h2 className="product-name">{productName}</h2>
      </li>
    );
}

export default ProductItem;