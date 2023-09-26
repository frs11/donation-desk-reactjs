
import LocalStorageData from "../LocalStorageData";
const Donation = () => {

    const locallyStoredData = JSON.parse(localStorage.getItem('totalDonates'))

    return (
        <div>
            {
                locallyStoredData ? <LocalStorageData locallyStoredData={locallyStoredData}></LocalStorageData> : <div><h1 className="text-center text-3xl lg:text-5xl mt-36">No Data Available</h1></div>
            }
        </div>
    );
};

export default Donation;