import { Chart } from "react-google-charts";
import PropTypes from 'prop-types';

const PieChartComponent = ({totalDonatedItem}) => {
    const remaining = 12 - totalDonatedItem;
    
    const data = [
        ["PropertyName", "Value"],
        ["Your Donation", totalDonatedItem],
        ["Donation Remaining", remaining],
      ];
      const options = {
        colors: ["#2AAA8A","#FF444A" ],
        legend: {position: "bottom"}
        };
    return (
        <div className="mt-3 lg:mt-0">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"500px"}
            />

            
            
        </div>
    );
};

PieChartComponent.propTypes = {
    totalDonatedItem: PropTypes.number
}

export default PieChartComponent;
