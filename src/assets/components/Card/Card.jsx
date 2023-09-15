import PropTypes from 'prop-types';
import dollar from '../../images/dollar-sign 1.svg'
import book from '../../images/Frame.svg'

const Card = ({card, handleAddToBookmark}) => {
    const {title,picture,description,price,credit} = card
    return (
    
        <div className="card bg-base-100 shadow-xl p-4 rounded-lg">
            <figure  ><img src={picture} className="w-[100%]" alt={`cover picture of the title ${title}`}/></figure>
            <div className="card-body">
                <h2 className="card-title mt-4 text-xl font-bold">{title}</h2>
                <p className='mt-4 font-[#737272]'>{description}</p>
                <div className='flex justify-between mt-4'>
                    <p className='inline-flex'><img src={dollar} className="mr-2" alt="" /> Price: {price}</p>
                    <p className='inline-flex'><img src={book}  className="mr-2" alt="" /> Credit: {credit}hr</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToBookmark(card) } className="btn btn-primary w-full mt-4 mb-4 bg-[#2F80ED] text-white py-2 rounded-lg hover:bg-green-200 hover:text-black">Select</button>
                </div>
            </div>
        </div>

    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Card;