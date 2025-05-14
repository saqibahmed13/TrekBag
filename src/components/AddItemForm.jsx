import { useRef, useState } from "react"
import Button from "./Button"

const AddItemForm = ({onAddItem}) => {
  const[itemText,setItemText] = useState('')
  const inputRef = useRef() 
  // when we are using autofocus lets say if the user tries to add an empty item we have alert notifcation after that focus is getting disappear from the input section, 
  // thats why we are using reference hook

  const handleSubmit = (e) => {
    e.preventDefault()

    if(itemText == ""){
      alert("Item can't be empty")
      inputRef.current.focus()
      // we are focusing here again to the input section we have used ref={inputref} in input section
      return
    }

    onAddItem(itemText)
    setItemText('')
  }

  return (
    <form onSubmit={handleSubmit} >
        <h2>Add an Item</h2>
<input  ref={inputRef} value={itemText} autoFocus={true} onChange={(e)=>setItemText(e.target.value)}/>
        <Button>Add to list</Button>
    </form>
  )
}

export default AddItemForm