import BagsItems from '../components/BagsItems'
import { useSelector, useDispatch } from "react-redux";
import BagSummary from '../components/BagSummary'
const Bags = () => {
  const bagItems = useSelector((store)=> store.bag);
  const itemList = useSelector((store)=> store.items);
   
  const items = itemList.filter((item)=>{
    const idx = bagItems.indexOf(item.id)
    return idx>=0;
  })

  return (
    <main>
      <div className='bag-page'>
        <div className='bag-items-container'>
          {items.map(item => (
            <BagsItems key={item.id} item={item} />
          ))}
        </div>
        <div className='bag-summary'>
          <BagSummary bagItemObjects= {items} />
        </div>
      </div>
    </main>
  )
}
export default Bags
