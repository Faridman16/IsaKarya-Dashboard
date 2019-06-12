import { ChartInfo } from '../_models/chartInfo';

export const bigChartMock: ChartInfo = {
    data : [
        {
            label: 'Data',

            pointBorderWidth: 1,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            fill: true,

            borderWidth: 2,
            data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
        }
    ],

    labels : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],

    chartOptions : {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 15,
            }
        },
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: '#fff',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
        },
        legend: {
            position: 'bottom',
            fillStyle: '#FFF',
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'rgba(255,255,255,0.4)',
                    fontStyle: 'bold',
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 10
                },
                gridLines: {
                    drawTicks: true,
                    drawBorder: false,
                    display: true,
                    color: 'rgba(255,255,255,0.1)',
                    zeroLineColor: 'transparent'
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: 'transparent',
                    display: false,

                },
                ticks: {
                    padding: 10,
                    fontColor: 'rgba(255,255,255,0.4)',
                    fontStyle: 'bold'
                }
            }]
        }
    },
};
