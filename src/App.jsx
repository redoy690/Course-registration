
import './App.css'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Cards from './assets/components/Cards/Cards'

function App() {
  

  return (
    <>
      <h1 className='text-center mt-10 text-3xl font-bold'>Course Registration</h1>
      <div className=' md:flex mt-6'>
         <Cards></Cards>
         <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
