import './content.scss'
import ProductCard from '../../molecules/productCard/ProductCard';
import { useDataContext } from '../../../context/DataContext'


const Content = (props) => {
  const { state }  = useDataContext();
  return (
    <div className='container'>
      <div className='row'> 
        {
          state.map((product) => (
            <div key={product.id} className='product'>
              <ProductCard product={product}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Content