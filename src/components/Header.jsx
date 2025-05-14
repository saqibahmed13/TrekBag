// import { useContext } from "react"
import Counter from "./Counter"
import Logo from "./Logo"
// import { ItemsContext } from "../context/ItemContextProvider"
// import { useItemsContextCustomHook } from "../lib/hooks"
import { useItemsStore } from "../store/itemsStore"

const Header = () => {

  // we can use like this or we can use our custom hook 
  // const {items} = useContext(ItemsContext)

  //custom hook
  // const {items} = useItemsContextCustomHook()
  

  // zustand 
  const items = useItemsStore(state=>state.items)

  return (
    <header>
    <Logo/>
    <Counter numberOfItemsPacked = {items.filter((item)=>item.packed).length} totalNumberOfItems = {items.length}/>
    </header> 
  )
}

export default Header