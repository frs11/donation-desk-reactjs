import PropTypes from 'prop-types';

const CardInfo = ({donatedCard}) => {
    const {title, banner, price, text_color, description} = donatedCard


    const buttonBackground ={
        backgroundColor : text_color
    }

    // console.log(donatedCard);
    return (
        <div className='w-10/12 lg:max-w-screen-2xl mx-auto my-24 lg:my-44'>
            <div className='relative'>
                <img src={banner} className='w-full' alt="" />
                
                <div className='absolute bottom-0 px-8 py-6 buttonbg'>
                    <button style={buttonBackground} className={`rounded-md px-6 py-2 text-white font-medium`}>Donate ${price}</button>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-semibold my-5'>{title}</h1>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    );
};

CardInfo.propTypes = {
    donatedCard: PropTypes.object,
    }

export default CardInfo;
