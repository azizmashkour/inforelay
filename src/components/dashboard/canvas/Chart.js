import React, { Component } from 'react';
import ChartJs from 'chart.js';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const {
      color,
      fill,
      steppedLine,
      stepSize,
      i18n,
    } = this.props;

    // const currLang = i18n.language;

    // const wrongRequestLabel = currLang === 'en' ? 'Pending requests' : 'Demandes en attente';
    // const rightRequestLabel = currLang === 'en' ? 'Completed requests' : 'Demandes complète';
    const wrongRequestLabel = 'Wrong requests';
    const rightRequestLabel = 'Right requests';
    const allRequestLabel = 'Pending requests';

    // const labels = Array.from(Array(data.length), (x, i) => i + 1);

    this.chartRef.current.height = '380';

    this.myChart = new ChartJs(this.chartRef.current, {
      type: 'bar',
      data: {
        labels: ['<  1', '1 - 2', '3 - 4', '5 - 9', '10 - 14', '15 - 19', '20 - 24', '25 - 29', '> - 29'],
        datasets: [{
          label: wrongRequestLabel,
          backgroundColor: 'rgb(255, 99, 132, 0.5)',
          data: [12, 59, 5, 56, 58, 12, 59, 80, 23],
        }, {
          label: rightRequestLabel,
          backgroundColor: 'rgb(0, 189, 57, 0.5)',
          data: [12, 59, 5, 56, 58, 12, 59, 65, 51],
        }, {
          label: allRequestLabel,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
        }],
      },
      options: {
        tooltips: {
          displayColors: true,
          callbacks: {
            mode: 'x',
          },
        },
        scales: {
          xAxes: [{
            stacked: true,
            gridLines: {
              display: false,
            },
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
            type: 'linear',
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'bottom' },
      },
    });
  }

  componentDidUpdate() {
    const { data } = this.props;
    const labels = Array.from(Array(data.length), (x, i) => i + 1);
    this.myChart.labels = labels;
    this.myChart.data.datasets[0].data = data;
    this.myChart.update();
  }

  render() {
    return (
      <canvas ref={this.chartRef} />
    );
  }
}
