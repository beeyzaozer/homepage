import './productCard.scss'
import ProductTitle from '../../atoms/productTitle/ProductTitle'
import ProductAuthor from '../../atoms/productCategory/ProductCategory'
import ProductPrice from '../../atoms/productPrice/ProductPrice'
import ProductImage from '../../atoms/productImage/ProductImage'


const ProductCard = ({ product }) => {
  return (
    <>
      <ProductImage product = {product.image}/>
      <ProductTitle product = {product.title}/>
      <ProductAuthor product = {product.category}/>
      <ProductPrice product = {product.price}/>
    </>
  )
}

export default ProductCard