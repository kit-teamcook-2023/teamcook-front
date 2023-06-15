export const barData = {
	series: [
		{
			name: "Series 1",
			data: [1113, 11140, 11125, 1110, 1119, 11121, 1170, 11151, 1142, 11160],
		},
	],
	options: {
		chart: {
			type: "bar",
			foreColor: "#37ACC9",
			toolbar: {show: false}
		},
		xaxis: {
			categories: ['서울', '용인', '부산', '인천', '부산', '대구', '대전', '광주', '수원', '울산'],
		},
		title: {
			text: "지역별 가스비 평균",
			align: "center",
			style: {
				fontSize: "20px",
				color: "#37ACC9",
				fontWeight: "bold"
			},
		},
	},
};

export const pieData = {
	series: [44, 55, 13, 43, 22, 33, 44, 11, 56, 12, 99, 11],
	options: {
		chart: {
			type: "pie",
			foreColor: "#37ACC9"
		},
		labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		title: {
			text: "월별 가스비 평균",
			align: "center",
			style: {
				fontSize: "20px",
				color: "#37ACC9",
				fontWeight: "bold"
			},
		},
	},
};

export const radialData = {
	series: [70],
	options: {
		chart: {
			type: "radialBar",
			foreColor: "#37ACC9"
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: "80%",
				},
			},
		},
		labels: ["현재 예상 가스비"],
		colors: ['#37ACC9'],
		title: {
			text: "내 예상 가스비",
			align: "center",
			style: {
				fontSize: "20px",
				color: "#37ACC9",
				fontWeight: "bold"
			},
		},
	},
};