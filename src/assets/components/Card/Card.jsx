import PropTypes from 'prop-types';

const Card = ({card}) => {
    const {title,picture,description,price,credit} = card
    return (
    
        <div className="card bg-base-100 shadow-xl p-4 rounded-lg">
            <figure  ><img src={picture} className="w-[100%]" alt={`cover picture of the title ${title}`}/></figure>
            <div className="card-body">
                <h2 className="card-title mt-4 text-xl font-bold">{title}</h2>
                <p className='mt-4 font-[#737272]'>{description}</p>
                <div className='flex justify-between mt-4'>
                    <p><img src="" alt="" /> Price: {price}</p>
                    <p><img src="" alt="" /> Credit: {credit}hr</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full mt-4 mb-4 bg-[#2F80ED] text-white py-2 rounded-lg hover:bg-green-200 hover:text-black">Select</button>
                </div>
            </div>
        </div>

    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;