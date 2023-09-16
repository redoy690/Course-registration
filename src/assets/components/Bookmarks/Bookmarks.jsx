import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';



const Bookmarks = ({bookmarks,remaining,totalCredit}) => {
    
    
    return (
        <div className="md:w-1/4 sm:ml-1 lg:ml-2 p-4 card rounded-xl bg-base-100 shadow-xl h-full order-2 mt-4 border-zinc-200 border-2 mx-2 mb-4">
            <h4 className='text-[#2F80ED] text-xl font-bold mb-3'>Credit Hour Remaining {remaining} hr</h4>
            <hr />
            <h2 className='text-xl font-bold mt-2'>Course Name</h2>
            <ol className='pl-5 my-3'>
            {
              bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}  ></Bookmark>)   
            }
            </ol>  
            <hr /> 
            <h1 className='my-3 font-bold'>Total Credit Hour : {totalCredit}</h1> 
            <hr /> 
           
            
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    remaining: PropTypes.number,
    totalCredit: PropTypes.number
}

export default Bookmarks;