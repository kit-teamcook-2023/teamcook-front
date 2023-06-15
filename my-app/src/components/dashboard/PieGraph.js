import Chart from "react-apexcharts";
import React from "react";
import {pieData} from '../data/data'

export const PieGraph = () => {


	return (
		<div className="col-md-4">
			<Chart
				options={pieData.options}
				series={pieData.series}
				type="pie"
				height={400}
				width="100%"
			/>
		</div>
	)
}