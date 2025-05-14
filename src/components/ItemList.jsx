import Select from "react-select"
import EmptyView from "./EmptyView"
// import { useContext } from "react"
import { useMemo, useState } from "react"
import { useItemsStore } from "../store/itemsStore"
// import { ItemsContext } from "../context/ItemContextProvider"

const ItemList = () => {

const sortingOptions = [
  {
    label:"Sort by default",
    value:"default"
  },
  {
    label:"Sort by packed",
    value:"packed"
  },
  {
    label:"Sort by unpacked",
    value:"unpacked"
  },
]


const [sortBy, setSortBy] = useState("default")


//normal way
// const context = useContext(ItemsContext)
// const items = context.items
// const handleDeleteItem = context.handleDeleteItem
// const handleToggleItem = context.handleToggleItem

//or

//destructured way


// below is the context API method 

// const {items,handleDeleteItem,handleToggleItem} = useContext(ItemsContext)

const items = useItemsStore(state=>state.items)
const deletedItem = useItemsStore(state=>state.deleteItem)
const toggleItem = useItemsStore(state=>state.toggleItem)

const sortedItems = useMemo(
  ()=>[...items].sort((a,b) => {   //items we have cloned because it will sort the original items so we are using like this 
  
  if(sortBy === "packed"){
    return b.packed - a.packed
  }
  else if(sortBy === "unpacked"){
    return a.packed - b.packed
  }
  return
}),[items,sortBy])

  return (
    <ul className="item-list">

      {items.length === 0 ? <EmptyView/> : null} 

      {items.length > 0 ? (<section className="sorting"><Select options={sortingOptions} defaultValue={sortingOptions[0]} onChange={(option)=> setSortBy(option.value)}/></section> ) : null } 

      {
        sortedItems.map((item)=>{
          return <Item key={item.id} deletedItem={deletedItem} item={item} toggleItem={toggleItem}>{item}</Item>
        })
      }

    </ul>
  )
}

export default ItemList


// const handleDelete = (deletedItem) =>{
//   const newList = item.filter((_, index)=>index!=deletedItem)
// }


function Item({item, toggleItem, deletedItem}){
  return(
    <li className="item">
      <label htmlFor="input_value">
        <input id="input_value" checked={item.packed} type="checkbox" onChange={()=>toggleItem(item.id)} readOnly  />
       {item.name}
      </label>
      <button onClick={() => deletedItem(item.id)}>❌</button>
    </li>
  )
}