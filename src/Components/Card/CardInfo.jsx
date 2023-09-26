import PropTypes from 'prop-types';
import swal from 'sweetalert';

const CardInfo = ({donatedCard}) => {
    const {id, title, banner, price, text_color, description} = donatedCard


    const buttonBackground ={
        backgroundColor : text_color
    }
    const handleDonateButton = () =>
    {
        const storedData = [];

        const localStorageData = JSON.parse(localStorage.getItem('totalDonates'))

        if(!localStorageData)
        {
            storedData.push(donatedCard)
            localStorage.setItem('totalDonates', JSON.stringify(storedData))
            swal("First Donate Done!!", "Thank you for donating!", "success");
        }
        else
        {
            const isExist = localStorageData.find((data) => data.id == id)
            if(isExist)
            {
                swal("Already donated!!!", "Thanks for trying!", "error");    
            }
            else
            {
                storedData.push(...localStorageData, donatedCard)
                localStorage.setItem('totalDonates', JSON.stringify(storedData))
                swal("Successfully!!!", "Thank you for donating!", "success");
            }
            
        }

        
    }

    // console.log(donatedCard);
    return (
        <div className='w-10/12 lg:max-w-screen-2xl mx-auto my-24 lg:my-44'>
            <div className='relative'>
                <img src={banner} className='w-full' alt="" />
                
                <div className='absolute bottom-0 px-8 py-6 buttonbg'>
                    <button onClick={handleDonateButton} style={buttonBackground} className={`rounded-md px-6 py-2 text-white font-medium`}>Donate ${price}</button>
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
