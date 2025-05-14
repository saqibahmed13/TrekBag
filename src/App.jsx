import './App.css'
import BackgroundHeading from './components/BackgroundHeading'
import Footer from './components/Footer'
import Header from './components/Header'
import ItemList from './components/ItemList'
import Sidebar from './components/Sidebar'

// import ItemContextProvider from './context/ItemContextProvider'

function App() {

  return(
    <>
     <BackgroundHeading/>
     <main className='main'>
      {/* <ItemContextProvider>   this is used for context API  */}
      <Header/>
      <ItemList/>
      <Sidebar/>
      {/* </ItemContextProvider> */}
     </main>
     <Footer/>
    </>
  )
}

export default App
