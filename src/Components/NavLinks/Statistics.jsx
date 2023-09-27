import PieChartComponent from "../PieChartComponent";


const Statistics = () => {

    const locallyStoredData = JSON.parse(localStorage.getItem('totalDonates'))
    let totalDonatedItem 

    locallyStoredData ? (totalDonatedItem = locallyStoredData.length) : (totalDonatedItem = 0)

    return (
        <div>
            
            <PieChartComponent totalDonatedItem = {totalDonatedItem} ></PieChartComponent>
        </div>
    );
};

export default Statistics;









