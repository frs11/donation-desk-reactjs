import Card from './Card';
import { useEffect, useState } from 'react';

const Cards = ( ) => {
    const [data, setData] = useState([])

    useEffect( () => {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setData(data))
      },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-5'>
            {
                data.map((card) => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};


export default Cards;