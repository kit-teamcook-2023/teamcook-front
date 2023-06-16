import {React, useState, useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import Spinner from './WaitGetCost'

export const ExpectCost = () => {
	const isDarkMode = localStorage.getItem("mode");
	const datalabelsFormatter = (val) => {
		return "₩" + String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	const [loading, setLoading] = useState(true);
	const [gasFee, setGasFee] = useState([{
		name: '이번달 가스비',
		data: [-1],
	},
	{
		name: '저번달 가스비',
		data: [-1],
	},
	{
		name: '이번 달 예상 가스비',
		data: [-1],
	},]);

	const getGasFee = async () => {
		setLoading(true)
		const token = localStorage.getItem("token");
		await axios.get('http://34.215.66.235:8000/user-fee', {
			headers: {
                'Authorization': `Bearer ${token}`
            }
		}).then( (res) => {
			const fee = res.data
			const data = [
				{
					name: '이번달 가스비',
					data: [parseInt(fee['gas']['cur_month'])],
				},
				{
					name: '저번달 가스비',
					data: [parseInt(fee['gas']['last_month'])],
				},
				{
					name: '이번 달 예상 가스비',
					data: [parseInt(fee['gas']['predict'])],
				},
			]
			setGasFee(data)
		})
		setLoading(false)
	}

	const chartOptions = {
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
		},
		subtitle: {
			text: ['* 해당 영역의 아무 곳이나 누르면 새로고침 돼요! *','* -1으로 떠있는 경우는 아직 불러오기 전이에요! *', '* 여러분의 데이터는 소중하니까요. *'],
			align: 'center',
			style: {
				fontSize: '15px'
			}
		}
	}

	useEffect(() => {setLoading(false)}, [])

	return (
		<>
			<div onClick={getGasFee} style={{ position: 'relative'}}>
				{loading? <Spinner /> : null}
				<Chart
					options={chartOptions}
					series={gasFee}
					type="bar"
					height="150%"
					width="100%"
				/>
			</div>
		</>
	);
}