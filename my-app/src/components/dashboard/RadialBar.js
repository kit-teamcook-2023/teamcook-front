import React from "react";
import Chart from "react-apexcharts";
import {radialData} from "../data/data";

export const RadialBar = () => {

	return (
		<div className="col-md-4" style={{textAlign: 'center'}}>
			<Chart
				options={radialData.options}
				series={radialData.series}
				type="radialBar"
				height={400}
				width="100%"
			/>
			<p style={{color: "#37ACC9"}}>50,000원</p>
		</div>
	);
};
