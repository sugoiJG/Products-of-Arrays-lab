

const ProductList = (props) => {
const products = props.product.map
((product) => {
  <products key={product.id} name={products.name} price={product.price} />
});

  return (
    <div>
      {products}
    </div>
  )
}

export default ProductList
