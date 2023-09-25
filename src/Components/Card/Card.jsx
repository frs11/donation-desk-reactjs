import PropTypes from 'prop-types';

const Card = ( {card}) => 
{
    const {title, banner, category, category_bg, card_bg, text_color } = card;
    
    return (
        <div>
            <div className={`rounded-lg pb-3 ${card_bg}`}>
                <img className='w-full' src={banner} alt="" />
                <div className="mt-4 ml-4">
                    <h3 className={`px-4 py-1 mb-2 text-${text_color} rounded-md font-semibold ${category_bg} w-max`}>{category}</h3>
                    <h2 className={`text-${text_color} text-lg flex grow font-medium`}>{title}</h2>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
}


export default Card;