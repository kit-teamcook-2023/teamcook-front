import Chart from "react-apexcharts";
import React, {useState} from "react";
import {Gumi, Seoul, Daegu, Incheon, Busan} from '../data/data'

export const PieGraph = () => {
	const selectCity = [
		{value: "Seoul", name: "서울"},
		{value: "Incheon", name: "인천"},
		{value: "Busan", name: "부산"},
		{value: "Daegu", name: "대구"},
		{value: "Gumi", name: "구미"},
	];
	const [selected, setSelected] = useState("Seoul");
	const handleSelect = (e) => {
		setSelected(e.target.value);
	};
	const optionCity = (selected) => {
		switch (selected) {
			case "Seoul" :
				return Seoul.options;
			case "Incheon" :
				return Incheon.options;
			case "Busan" :
				return Busan.options;
			case "Daegu" :
				return Daegu.options;
			case "Gumi" :
				return Gumi.options;
			default:
				return null;
		}
	};
	const seriesCity = (selected) => {
		switch (selected) {
			case "Seoul" :
				return Seoul.series;
			case "Incheon" :
				return Incheon.series;
			case "Busan" :
				return Busan.series;
			case "Daegu" :
				return Daegu.series;
			case "Gumi" :
				return Gumi.series;
			default:
				return null;
		}
	};

	return (
		<div className="col-md-6">
			<select className="form-select" onChange={handleSelect} value={selected}>
				{selectCity.map((city) => {
					return <option value={city.value} key={city.value}>
						{city.name}
					</option>
				})}
			</select>
			<Chart
				options={optionCity(selected)}
				series={seriesCity(selected)}
				type="pie"
				height={400}
				width="100%"
			/>
		</div>
	)
}