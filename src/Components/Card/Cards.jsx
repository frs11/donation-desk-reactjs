import PropTypes from 'prop-types';
import Card from './Card';
import { useEffect, useState } from 'react';
// import { data } from 'autoprefixer';

const Cards = ( {categoryName} ) => {
    const [datas, setDatas] = useState([])


    useEffect( () => {
        fetch('/Data.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    

    const filteredData = categoryName ? datas.filter((data) => data.category.toLowerCase() === categoryName.toLowerCase()) : datas
    
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-5 my-12 md:my-20 lg:my-32'>
            {
               filteredData.length > 0 ? filteredData.map((card) => <Card key={card.id} card={card}></Card>) : <div className='md:col-span-2 lg:col-span-4'><h1 className="text-center text-3xl lg:text-5xl mt-16 mb-8">Does not match any category!</h1></div>
            }
        </div>
    );
};

Cards.propTypes = {
    categoryName: PropTypes.string,
}

export default Cards;