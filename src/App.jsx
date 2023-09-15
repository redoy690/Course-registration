
import { useState } from 'react'
import './App.css'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Cards from './assets/components/Cards/Cards'

function App() {
  const [bookmarks, setBookmarks] =useState([])
  

  const handleAddToBookmark = card =>{
      const isExist = bookmarks.find((item) => item.id == card.id);
      if(isExist){
        return alert('already');
      } else {
        const newBookmark = [...bookmarks, card]

        setBookmarks(newBookmark)
        console.log(bookmarks)
      }
     
  }

  

  return (
    <div className='mx-14 '>
      <h1 className='text-center mt-10 text-3xl font-bold'>Course Registration</h1>
      <div className=' md:flex mt-6 gap-6 '>
         <Cards handleAddToBookmark={handleAddToBookmark} ></Cards>
         <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </div>
  )
}

export default App
