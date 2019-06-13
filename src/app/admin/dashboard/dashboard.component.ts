import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartService } from '../../_services/chart.service';

import { bigChartMock } from '../../_mocks/bigChartMock';
import { LineChartMock } from 'src/app/_mocks/lineChartMock';
import { LineChartWGDMock } from 'src/app/_mocks/lineChartWGDMock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor() { }

  // BIG CHART
  lineBigDashboardChartData = bigChartMock.data;
  lineBigDashboardChartLabels = bigChartMock.labels;
  lineBigDashboardChartOptions = bigChartMock.chartOptions;
  lineBigDashboardChartColors: any;

  // LINE CHART
  lineChartData = LineChartMock.data;
  lineChartLabels = LineChartMock.labels;
  lineChartOptions = LineChartMock.chartOptions;
  lineChartColors: any;

  // LINE CHART WITH GRID AND DATA
  lineChartWGD_Data = LineChartWGDMock.data;
  lineChartWGD_Labels = LineChartWGDMock.labels;
  lineChartWGD_Options = LineChartWGDMock.chartOptions;
  lineChartWGD_Colors: any;

  canvas: any;

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    // FOR GRADIENT BIG CHART
    const chartColor = '#FFFFFF';
    this.canvas = document.getElementById('bigDashboardChart');
    let ctx = this.canvas.getContext('2d');

    let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    let gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');
    this.lineBigDashboardChartColors = [
      {
        backgroundColor: gradientFill,
        borderColor: chartColor,
        pointBorderColor: chartColor,
        pointBackgroundColor: '#2c2c2c',
        pointHoverBackgroundColor: '#2c2c2c',
        pointHoverBorderColor: chartColor,
      }
    ];

    // FOR GRADIENT LINE CHART
    this.canvas = document.getElementById('lineChart');
    ctx = this.canvas.getContext('2d');

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');
    this.lineChartColors = [
      {
        borderColor: '#f96332',
        pointBorderColor: '#FFF',
        pointBackgroundColor: '#f96332',
        backgroundColor: gradientFill
      }
    ];

    // FOR GRADIENT LINE CHART WITH NUMBER AND GRID
    // this.canvas = document.getElementById('lineChartWithNumbersAndGrid');
    // ctx = this.canvas.getContext('2d');

    // gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    // gradientStroke.addColorStop(0, '#80b6f4');
    // gradientStroke.addColorStop(1, chartColor);

    // gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    // gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    // gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');
    // this.lineChartWGD_Colors = [
    //   {
    //     borderColor: '#f96332',
    //     pointBorderColor: '#FFF',
    //     pointBackgroundColor: '#f96332',
    //     backgroundColor: gradientFill
    //   }
    // ];

//   this.chartService.getChartData().subscribe(data => {
//       console.log(data);
//     this.data = data;
//   });

  }

}
