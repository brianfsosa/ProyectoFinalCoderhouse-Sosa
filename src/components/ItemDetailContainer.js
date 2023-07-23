import { useState, useEffect} from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'

import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
        })
    },[itemId])

  return (
    <div className='flex justify-center items-center'>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer