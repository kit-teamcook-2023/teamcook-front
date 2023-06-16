import React from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export const ExpectCost = () => {
	const isDarkMode = localStorage.getItem("mode");
	const datalabelsFormatter = (val) => {
		return "₩" + String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

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
				categories: [''],
				labels: {
					style: {
						colors: '#37ACC9'
					},
					formatter: datalabelsFormatter,
				},
			},
			yaxis: {
				labels: {
					style: {
						colors: '#37ACC9'
					},
					formatter: datalabelsFormatter,
				},
			},
			dataLabels: {
				style: {
					fontSize: '15px',
					fontFamily: 'Noto Sans KR, Arial, sans-serif',
					colors: [`${isDarkMode === 'true' ? '#fff' : '#212121'}`]
				},
				formatter: datalabelsFormatter,
			}
		},
	}

	return (
		<div>
			<Chart
				options={gasData.options}
				series={gasData.series}
				type="bar"
				height="150%"
				width="100%"
			/>
		</div>
	);
}