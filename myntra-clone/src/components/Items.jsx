import { useSelector, useDispatch } from 'react-redux'
import { bagsAction } from '../store/bagsSlice'
const Items = ({ item }) => {
  const dispatch = useDispatch()
  const bagItems = useSelector(store => store.bag)
  const elementFound = bagItems.indexOf(item.id)

  return (
    <div className='item-container'>
      <img className='item-image' src={item.image} alt='item image' />
      <div className='rating'>
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className='company-name'>{item.company}</div>
      <div className='item-name'>{item.item_name}</div>
      <div className='price'>
        <span className='current-price'>Rs{item.current_price}</span>
        <span className='original-price'>Rs{item.original_price}</span>
        <span className='discount'>({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound >= 0 ? (
        <button
          className='btn-add-bag btn btn-danger'
          onClick={() => {
            dispatch(bagsAction.removefromBag(item.id))
          }}
        >
         Remove
        </button>
      ) : (
        <button
          className='btn-add-bag'
          onClick={() => {
            dispatch(bagsAction.addTobag(item.id))
          }}
        >
          Add to Bag
        </button>
      )}
    </div>
  )
}

export default Items
