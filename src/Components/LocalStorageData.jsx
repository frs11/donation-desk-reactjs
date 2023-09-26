import { useState } from "react";
import PropTypes from 'prop-types';
import DonatedCardLayout from "./Card/DonatedCardLayout";

const LocalStorageData = ({locallyStoredData}) => {

    
    const [numberOfCards, setNumberOfCards] = useState(4)

    return (
        <div>
            <div className="w-10/12 lg:max-w-screen-2xl mx-auto my-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                locallyStoredData.slice(0, numberOfCards).map((singleData) => <DonatedCardLayout key={singleData.id} singleData={singleData}></DonatedCardLayout>)
            }

            <div className="mx-auto lg:col-span-2">
                <div className= { numberOfCards == locallyStoredData.length || locallyStoredData.length <= 4 ? 'hidden' : ''}>
                    <button onClick={() => setNumberOfCards(locallyStoredData.length)} className="bg-green-600 px-6 py-2 text-white rounded-md">See All</button>
                </div>

            </div>

            </div>
        </div>
    );
};

LocalStorageData.propTypes = {
    locallyStoredData: PropTypes.array.isRequired,
}

export default LocalStorageData;