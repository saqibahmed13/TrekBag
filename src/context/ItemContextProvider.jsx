import { createContext, useEffect, useState } from "react"
import { initialItems } from "../lib/constants"

export const ItemsContext = createContext()

const ItemContextProvider = ({children}) => {


const storeAllItems = JSON.parse(localStorage.getItem('items'))
  const [items, setItems] = useState(storeAllItems || initialItems) 

  //or 

  // const [items, setItems] = useState(()=>{
  //   const storeAllItems = JSON.parse(localStorage.getItem('items'))
  //   return storeAllItems || initialItems
  // })

  const handleAddItems = (newItemText) =>{
    const newItem={
      id:new Date().getTime(),
      name:newItemText,
      packed:false
    }
    const newItems = [...items,newItem]
    setItems(newItems);
  }

  const handleDeleteItem = (id)=>{
    const newItems = items.filter((item) => item.id != id)
    setItems(newItems)
  }

  const handleToggleItem = (id)=>{
    const newItems = items.map((item)=>{
      if(item.id==id){
        return {...item, packed:!item.packed}
      }
      return item
    })
    setItems(newItems)
  }

const handleRemoveAllItems = () => {
  setItems([])
}

const handleResetToInitial = () =>{
  setItems(initialItems)
}


const handleMarkAsCompleted = ()=>{
  const newItems = items.map((item)=>{
    return {...item, packed:true}
  })
  setItems(newItems)
}

const handleMarkAsInCompleted = ()=>{
  const newItems = items.map((item)=>{
    return {...item, packed : false}
  })
  setItems(newItems)
}


useEffect(()=> { localStorage.setItem('items', JSON.stringify(items));
},[items])

  return (
    <ItemsContext.Provider value={{items, handleMarkAsInCompleted,handleMarkAsCompleted,handleResetToInitial,handleRemoveAllItems,handleDeleteItem,handleAddItems,handleToggleItem}}>
        {children}
    </ItemsContext.Provider>
  )
}

export default ItemContextProvider