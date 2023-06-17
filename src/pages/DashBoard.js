import React from "react";
import Chart from 'react-apexcharts';
import {PieGraph} from "../components/dashboard/PieGraph";
import {BarGraph} from "../components/dashboard/BarGraph";
import {Caution} from "../components/dashboard/Caution";

export const DashBoard = () => {

	document.title="대시 보드"

	return (
		<div id="page-wrapper">
			<div className="row">
				<div className="col-lg-12">
					<h1 className="page-header">지역별 가스비</h1>
				</div>
			</div>
			<div className="row">
				<BarGraph />
				<PieGraph />
			</div>
			<Caution />
		</div>
	)
}