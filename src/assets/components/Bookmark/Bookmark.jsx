import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='mt-2'>
            <li type="1" >{title}</li>                
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;