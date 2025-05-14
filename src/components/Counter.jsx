
const Counter = ({totalNumberOfItems,numberOfItemsPacked}) => {
  return (
    <p><b>{numberOfItemsPacked}</b>/ {totalNumberOfItems} items are packed</p>
  )
}

export default Counter