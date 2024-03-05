import React, {useState, useEffect} from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import ProductItem from './ProductItem';
// import productData from './data/products.json'

const listProducts = `
  query listProducts {
    listProducts {
      items {
        id
        productName
        dynamicSlug
      }
    }
  }
`

const Products = () => {

  const [productData, setProductData] = useState([])

  const loadProductData = async() => {
    const { data } = await API.graphql(
      graphqlOperation(listProducts)
    )
    setProductData(data?.listProducts?.items)
  }

  useEffect(() => {
    loadProductData()
  }, [])

  return (
    <section id="products" className="section">
      <header className="imageheader"></header>
      <div className="container">
        <h2 className="headline">Products</h2>
        <p>H+ Sport is <em>dedicated to creating</em> eco-friendly, high-quality, nutrient-rich, nutritional products that <em>enhance active lifestyles</em>. We <a href="#guarantee">guarantee</a> it. Take a look at some of our products.</p>
      </div>
      <ul className="product-list">
        {
          productData?.map((product) => <ProductItem dynamicSlug={`${product.dynamicSlug}`} productName={`${product.productName}`} />)
        }
      </ul>
    </section>
  );
}

export default Products;