// import { useContext } from "react"
import AddItemForm from "./AddItemForm"
import BottomGroup from "./ButtonGroup"
import { useItemsStore } from "../store/itemsStore"
// import { ItemsContext } from "../context/ItemContextProvider"

const Sidebar = () => {
  // const {handleAddItems} = useContext(ItemsContext)
  const addItems = useItemsStore((state)=>state.addItems)
  return (
    <div className="sidebar">
      <AddItemForm onAddItem = {addItems}/>
      <BottomGroup/> 
    </div>
  )
}

export default Sidebar