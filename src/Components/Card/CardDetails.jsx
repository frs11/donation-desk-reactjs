// import { useLocation } from 'react-router-dom';

import { useLoaderData, useParams } from "react-router-dom";
// import Card from "./Card";
import CardInfo from "./CardInfo";
import { useEffect, useState } from "react";

// import CardInfo from './CardInfo';
const CardDetails = () => {
  const [donatedCard, setDonatedCard] = useState({});

  const allCardData = useLoaderData();
  const {id} = useParams();
//   console.log(selectedCardId.id);
//   console.log(allCardData);
// console.log(location);
// console.log(donatedCard);
useEffect(() => 
{
    const matchedData = allCardData.find((card => card.id === id))
    setDonatedCard(matchedData)
}, [id, allCardData])

    return (
        <div>
            <CardInfo donatedCard={donatedCard}></CardInfo>
        </div>
    );
};

export default CardDetails;