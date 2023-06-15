import React from "react";
import Chart from "react-apexcharts";
import {barData} from "../data/data"

export const BarGraph = () => {

	return (
		<div  className="col-md-4">
			<Chart
				options={barData.options}
				series={barData.series}
				type="bar"
				height={400}
				width="100%"
			/>
		</div>
	);
};
