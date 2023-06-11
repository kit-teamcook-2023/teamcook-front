import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gasData: {
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
            height: 400,
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
      },
    };
  }

  componentDidMount() {
    this.patchGasData();
  }

  patchGasData = () => {
    let TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6InRlc3QyIiwidWlkIjoiMTAyODkwMTcyOTA0IiwiZXhwIjoxNjg2NDYxMTQxfQ.hVuuTc1GQQw8-Dtp3Vm6LkKjPFcI3TG--63Hisx1pvI';

    axios.get('http://34.215.66.235:8000/user-fee', {
      headers: {
        'Authorization': 'Bearer ' + TOKEN
      }
    })
      .then(res => {
        console.log(res.status);
        console.log(res.data);

        const updatedGasData = {
          ...this.state.gasData,
          series: res.data,
        };

        this.setState({ gasData: updatedGasData });
      })
      .catch(err => {
        console.log(err.response.status);
      });
  }

  render() {
    document.title = '대시 보드';

    return (
      <div id="page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">나의 가스 소비 차트</h1>
          </div>
        </div>
        <div>
          <button onClick={this.patchGasData}>가스비 확인</button>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Chart
              options={this.state.gasData.options}
              series={this.state.gasData.series}
              type="bar"
              height={200}
              width={1500}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;