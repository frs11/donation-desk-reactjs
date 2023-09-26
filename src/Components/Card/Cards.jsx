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
                filteredData.map((card) => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    categoryName: PropTypes.string,
}

export default Cards;