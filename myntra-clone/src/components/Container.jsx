import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from '../store/itemsSlice'

const Container = ({ children }) => {
  const dispatch = useDispatch()


  useEffect(() => {
    fetch('http://localhost:8080/items')
      .then(res => res.json())
      .then(({ items }) => dispatch(itemsActions.addInitialItems(items[0])))}, [])

  return <>{children}</>
}

export default Container
