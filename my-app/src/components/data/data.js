const datalabelsFormatter = (val) => {
	return "₩" + String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const barData = {
	
	series: [
		{
			name: "기본요금",
			data: [1000, 840, 900, 750, 850, 778, 760, 950, 820, 770],
		},
	],
	options: {
		chart: {
			type: "bar",
			foreColor: "#37ACC9",
			toolbar: {show: false}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					position: 'top',
				}
			}
		},
		grid: {
			xaxis: {
			  lines: {
				show: false
			  }
			},
			yaxis: {
			  lines: {
				show: false
			  }
			}
		  },
		xaxis: {
			categories: ['서울', '인천', '부산, 대구', '광주, 전주, 구미', '대전, 창원', '울산', '세종', '춘천', '천안', '목포'],
		},
		yaxis: {
			labels: {
				style: {
					colors: '#37ACC9'
				},
				formatter: datalabelsFormatter,
			},
		},
		title: {
			text: "지역별 도시가스 기본요금",
			align: "center",
			style: {
				fontSize: "20px",
				color: "#37ACC9",
				fontWeight: "bold"
			},
		},
		dataLabels: {
			style: {
				colors: ['#37acc9']
			},
			offsetY: -20,
			formatter: datalabelsFormatter,
		},
	},
};

export const Seoul = {
	series: [667452, 615352, 465250, 339407, 226520, 170122, 160511, 163032, 147556, 213556, 375289, 636178],
	options: {
		chart: {
			type: "pie",
			foreColor: "#37ACC9"
		},
		labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		title: {
			text: "서울시 월별 가스 사용량 비율",
			align: "center",
			style: {
				fontSize: "20px",
				color: "#37ACC9",
				fontWeight: "bold"
			},
		},
	},
};

export const Incheon = {
	series: [55184, 53119, 45196, 34795, 27731, 26761, 29863, 26452, 25422, 31866, 43257, 56931],
	options: {
		chart: {
			type: "pie",
			foreColor: "#37ACC9"
		},
		labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		title: {
			text: "인천시 월별 가스 사용량 비율",
			align: "center",
			style: {
				fontSize: "20px",
				color: "#37ACC9",
				fontWeight: "bold"
			},
		},
	},
};

export const Busan = {
	series: [225359, 161541, 149013, 105845, 87852, 76389, 74168, 67620, 70067, 87210, 126662, 190272],
	options: {
		chart: {
			type: "pie",
			foreColor: "#37ACC9"
		},
		labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		title: {
			text: "부산시 월별 가스 사용량 비율",
			align: "center",
			style: {
				fontSize: "20px",
				color: "#37ACC9",
				fontWeight: "bold"
			},
		},
	},
};

export const Daegu = {
	series: [157556, 158913, 135484, 107967, 83278, 56679, 50674, 53419, 51142, 52524, 78450, 117002],
	options: {
		chart: {
			type: "pie",
			foreColor: "#37ACC9"
		},
		labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		title: {
			text: "대구시 월별 가스 사용량 비율",
			align: "center",
			style: {
				fontSize: "20px",
				color: "#37ACC9",
				fontWeight: "bold"
			},
		},
	},
};

export const Gumi = {
	series: [55184, 53119, 45196, 34795, 27731, 26761, 29863, 26452, 25422, 31866, 43257, 56931],
	options: {
		chart: {
			type: "pie",
			foreColor: "#37ACC9"
		},
		labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		title: {
			text: "구미시 월별 가스 사용량 비율",
			align: "center",
			style: {
				fontSize: "20px",
				color: "#37ACC9",
				fontWeight: "bold"
			},
		},
	},
};