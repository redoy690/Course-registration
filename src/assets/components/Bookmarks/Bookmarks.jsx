import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';



const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="md:w-1/4 ml-4 p-6 card rounded-lg bg-base-100 shadow-xl h-full ">
            <h4 className='text-[#2F80ED] text-xl font-bold mb-3'>Credit Hour Remaining  hr</h4>
            <hr />
            <h2 className='text-xl font-bold mt-2'>Course Name</h2>
            <ol className='pl-5 my-3'>
            {
              bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)   
            }
            </ol>  
            <hr /> 
            <h1 className='my-3 font-bold'>Total Credit Hour : 13</h1> 
            <hr /> 
            <h2 className='font-bold text-lg mt-4'> Total Price : 48000 USD</h2>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array
}

export default Bookmarks;