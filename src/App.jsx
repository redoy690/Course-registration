
import { useState } from 'react'
import './App.css'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Cards from './assets/components/Cards/Cards'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarks, setBookmarks] =useState([])
  const [remaining, setremaining] = useState(0)
  const [totalCredit, setTotalCredit]= useState(0)
 
  

  const handleAddToBookmark = card =>{
      const isExist = bookmarks.find((item) => item.id == card.id);
      const creditParse = parseFloat(card.credit)
      let count =creditParse;
      
      if(isExist){
        return toast("You Already Selected This Course")
      } else {
        bookmarks.forEach(item=>{
          const creditParse = parseFloat(item.credit)
          count=count+creditParse
          console.log(totalCredit)
        })

        if(count > 20 ){
         return toast("You Have Finished Credit Limit")
          
        } else { 
          const ReaminingCredit = 20-count;
          setremaining(ReaminingCredit)
          setTotalCredit(count)
          const newBookmark = [...bookmarks, card]
          setBookmarks(newBookmark)   
        } 
      }  
  }
  
        
  

  return (
    <div className='md:mx-14 sm:mx-1'>
      <h1 className='text-center mt-10 text-3xl font-bold'>Course Registration</h1>
      <div className=' md:flex mt-6 gap-6 '>
         
         <Bookmarks bookmarks={bookmarks} remaining={remaining} totalCredit={totalCredit} ></Bookmarks>
         <Cards handleAddToBookmark={handleAddToBookmark} ></Cards>
         <ToastContainer />
        
      </div>
      
    </div>
  )
}

export default App
