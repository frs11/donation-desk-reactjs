
import { useLoaderData, useParams } from "react-router-dom";
import CardInfo from "./CardInfo";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const [donatedCard, setDonatedCard] = useState({});
  const allCardData = useLoaderData();
  const {id} = useParams();


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