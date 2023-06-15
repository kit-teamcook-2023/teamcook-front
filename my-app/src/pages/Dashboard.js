import React from "react";
import Chart from 'react-apexcharts';
import {PieGraph} from "../components/dashboard/PieGraph";
import {BarGraph} from "../components/dashboard/BarGraph";
import {RadialBar} from "../components/dashboard/RadialBar";
import {Caution} from "../components/dashboard/Caution";

export const DashBoard = () => {

	document.title="대시 보드"

	return (
		<div id="page-wrapper">
			<div className="row">
				<div className="col-lg-12">
					<h1 className="page-header">실시간 가스 요금</h1>
				</div>
			</div>
			<div className="row">
				<RadialBar />
				<BarGraph />
				<PieGraph />
			</div>
			<Caution />
		</div>
	)
}