import Items from '../components/Items'
import { useSelector} from "react-redux";

const Home = () => {
  const items = useSelector((store)=> store.items);

  return (
    <main>
      <div className='items-container'>
        {items.map(item => (
          <Items item={item} key={item.id} />
        ))}
      </div>
    </main>
  )
}
export default Home
