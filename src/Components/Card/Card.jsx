import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ( {card}) => 
{
    const {id, title, banner, category, category_bg, card_bg, text_color } = card;

    const categoryStyle ={
        backgroundColor : category_bg,
        color : text_color
    }
    const cardBackground ={
        backgroundColor : card_bg
    }
    const textStyle ={
        color : text_color
    }

    return (
        <Link to={`/carddetails/${id}`}>
            <div>
                <div style={cardBackground} className={`rounded-lg pb-4`}>
                    <img className='w-full' src={banner} alt="" />
                    <div className="mt-4 ml-4">
                        <h3 style={categoryStyle} className={`px-4 py-1 mb-2 rounded-md font-semibold w-max`}>{category}</h3>
                        <h2 style={textStyle} className={`text-lg flex grow font-medium`}>{title}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
}


export default Card;