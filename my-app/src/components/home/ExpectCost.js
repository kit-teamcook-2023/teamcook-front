import React from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export const ExpectCost = () => {
	const gasData = {
		series: [
			{
				name: '이번달 가스비',
				data: [20000],
			},
			{
				name: '저번달 가스비',
				data: [10000],
			},
			{
				name: '이번 달 예상 가스비',
				data: [30000],
			},
		],
			options: {
			chart: {
				type: 'bar',
				height: 500,
				foreColor: "#37ACC9",
				toolbar: {show: false}
			},
			plotOptions: {
				bar: {
					horizontal: true,
				},
			},
			xaxis: {
				categories: ['가스비'],
			},
		},
	}

	return (
		<div>
			<Chart
				options={gasData.options}
				series={gasData.series}
				type="bar"
				height="100%"
				width="100%"
			/>
		</div>
	);
}