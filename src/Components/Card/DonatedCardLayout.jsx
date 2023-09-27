import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonatedCardLayout = ({singleData}) => {
    const { id, title, banner, category, category_bg, card_bg, text_color, price } = singleData;

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
    const buttonStyle ={
        backgroundColor : text_color,
        color : "white"
    }

    return (
        <div style={cardBackground} className='block md:flex lg:flex rounded-lg'>
            <div className='lg:w-72'>
                <img src={banner} className='w-full' alt="" />
            </div>
            <div className='flex items-center ml-6 lg:ml-4'> 
                <div>
                <p style={categoryStyle} className='w-max px-2 mt-2 md:mt-0 lg:mt-0 py-px rounded-sm'>{category}</p>
                <h1 className='font-semibold my-1'>{title}</h1>
                <p style={textStyle} className='font-semibold'>${price}.00</p>
                <Link to={`/carddetails/${id}`}>
                    <button style={buttonStyle} className='py-2 px-4 mt-2 font-semibold rounded-md'>View Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};
DonatedCardLayout.propTypes = {
    singleData: PropTypes.object,
    }


export default DonatedCardLayout;