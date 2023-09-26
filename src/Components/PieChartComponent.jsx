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
        };
    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"350px"}
            />

            
            
        </div>
    );
};

PieChartComponent.propTypes = {
    totalDonatedItem: PropTypes.number
}

export default PieChartComponent;
