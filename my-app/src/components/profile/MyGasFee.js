import ReactApexChart from 'react-apexcharts';
import './css/Profile.css'
import {useEffect, useState} from "react";
import axios from "axios";

export const MyGasFee = () => {

	const [months, setMonths] = useState([]);

	useEffect(() => {
		axios.get(`http://34.215.66.235:8000/user-page-fee`, {
			headers: {
				"Authorization": "Bearer " + localStorage.getItem("token")
			}
		})
			.then(res => {
				console.log(res);
				setMonths(Object.values(res.data))
			})
			.catch(err => console.log("gasfee err", err));
	}, [])

	const series = [
		{
			name: "월별 데이터",
			data: months
		}
	];

	const options = {
		chart: {
			height: 100,
			width: 100,
			toolbar: {show: false},
		},
		grid: {
			show: false
		},
		yaxis: {
			labels: {
				style: {
					colors: '#37ACC9'
				}
			},
		},
		xaxis: {
			labels: {
				style: {
					colors: '#37ACC9'
				}
			},
			categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
		}
	};

	return (
		<div className={`${localStorage.getItem("mode") === "true" ?  "black-chart" : "white-chart"}`} >
			<ReactApexChart
				type="bar"
				series={series}
				options={options}
			/>
		</div>
	);
};
