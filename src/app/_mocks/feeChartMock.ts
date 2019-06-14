import { ChartInfo } from '../_models/chartInfo';

export const FeeChartMock: ChartInfo = {
   data:[
    {
        label: "Fee",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 1,
        data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
    }
   ],
   labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
   chartOptions: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [{
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        }
      }],
      xAxes: [{
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 15,
        bottom: 15
      }
    }
  }
} 