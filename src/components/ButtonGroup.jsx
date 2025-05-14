// import { useContext } from "react"
import Button from "./Button"
// import { ItemsContext } from "../context/ItemContextProvider"
import { useItemsStore } from "../store/itemsStore"

const ButtonGroup = () => {

  // const secondaryButtons = ["Mark all as completed", "Mark all as incompleted" , "Reset to initial", "Remove all items" ]

  // const secondaryButtons = [
  //   {
  //     text:"Mark all as completed",
  //     onClick:handleMarkAsCompleted,
  //   },
  //   {
  //     text:"Mark all as incompleted",
  //     onClick:handleMarkAsInCompleted,
  //   },
  //   {
  //     text:"Reset to initial",
  //     onClick:handleResetToInitial,
  //   },
  //   {
  //     text:"Remove all items",
  //     onClick:handleRemoveAllItems,
  //   },
  // ]

  // const {handleMarkAsCompleted,handleResetToInitial,handleMarkAsInCompleted,handleRemoveAllItems} = useContext(ItemsContext) this is for context api 

  //below is the way used for zustand 
  const markAsCompleted = useItemsStore((state)=>state.markAsCompleted);
  const markAsInCompleted = useItemsStore((state)=>state.markAsInCompleted);
  const resetToInitial = useItemsStore((state)=>state.resetToInitial);
  const removeAllItems = useItemsStore((state)=>state.removeAllItems);

  return ( 
    <section className="button-group">
    {/* below is the method used for zustand */}
    <Button onClick={markAsCompleted} buttonType="secondary">Mark all as completed</Button>
      <Button onClick={markAsInCompleted} buttonType="secondary">Mark all as incompleted</Button>
      <Button onClick={resetToInitial} buttonType="secondary">Reset to initial</Button>
      <Button onClick={removeAllItems} buttonType="secondary">Remove all items</Button>

      {/* <Button onClick={handleMarkAsCompleted} buttonType="secondary">Mark all as completed</Button>
      <Button onClick={handleMarkAsInCompleted} buttonType="secondary">Mark all as incompleted</Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">Reset to initial</Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">Remove all items</Button> */}

      {/* there is one more way to write this up using map below */}
      {/* {
        secondaryButtons.map((button)=>{
          return <Button  key={button.text + button.onClick} buttonType="secondary" onClick={button.onClick}>{button.text}</Button>
        })
       
      } */}
    </section>
  )
}

export default ButtonGroup