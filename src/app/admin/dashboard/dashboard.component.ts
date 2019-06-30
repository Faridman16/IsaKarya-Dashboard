import { Component, OnInit} from '@angular/core';

import { ChartDataSets, ChartDataLabels } from 'chart.js';

import { bigChartMock } from '../../_mocks/bigChartMock';
import { OPChartMock } from 'src/app/_mocks/OPChartMock';
import { LineChartWGDMock } from 'src/app/_mocks/lineChartWGDMock';
import { FeeChartMock } from '../../_mocks/feeChartMock';
import { OperationalService } from 'src/app/_services/operational.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public lineBigDashboardChartType;
  public gradientStroke;
  public chartColor;
  public ctx;
  public gradientFill;
  public canvas;
  data: any;

  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
      
      if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
      }
    }  
    
  constructor(
    private opService: OperationalService,
  ) { }
  
  // BIG CHART
  lineBigDashboardChartData = bigChartMock.data;
  lineBigDashboardChartLabels = bigChartMock.labels;
  lineBigDashboardChartOptions = bigChartMock.chartOptions;
  lineBigDashboardChartColors: any;
  
  // Operational Chart
  OPChartData: ChartDataSets[] = OPChartMock.data;
  OPChartLabels: ChartDataLabels[] = OPChartMock.labels;
  OPChartOptions = OPChartMock.chartOptions;
  OPChartColors: any;

  // LINE CHART WITH GRID AND DATA
  lineChartWGD_Data = LineChartWGDMock.data;
  lineChartWGD_Labels = LineChartWGDMock.labels;
  lineChartWGD_Options = LineChartWGDMock.chartOptions;
  lineChartWGD_Colors: any;
  
  // FEE CHART
  feeChartData = FeeChartMock.data;
  feeChartLabel = FeeChartMock.labels;
  feeChartOptions = FeeChartMock.chartOptions
  feeChartColors: any;
  
  public chartClicked(e: any): void {
    console.log(e);
  }
  
  public chartHovered(e: any): void {
    console.log(e);
  }
  
  ngOnInit() {
    this.getOPChart();
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
    this.canvas = document.getElementById('OPChart');
    ctx = this.canvas.getContext('2d');

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');
    this.OPChartColors = [
      {
        borderColor: '#f96332',
        pointBorderColor: '#FFF',
        pointBackgroundColor: '#f96332',
        backgroundColor: gradientFill
      }
    ];

    // FOR GRADIENT LINE CHART WITH NUMBER AND GRID
    this.canvas = document.getElementById('lineChartWithNumbersAndGrid');
    ctx = this.canvas.getContext('2d');

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#18ce0f');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));
    this.lineChartWGD_Colors = [
      {
        borderColor: "#18ce0f",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#18ce0f",
        backgroundColor: gradientFill
      }
    ];

    this.canvas = document.getElementById("feeChartId");
    this.ctx = this.canvas.getContext("2d");

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));

    this.feeChartColors = [
     {
       backgroundColor: this.gradientFill,
       borderColor: "#2CA8FF",
       pointBorderColor: "#FFF",
       pointBackgroundColor: "#2CA8FF",
     }
   ];

     

  }
  
  getOPChart() {
    this.opService.getOperationalList(7).subscribe(res => {
      this.OPChartData[0].data.length = 0;
      this.OPChartLabels.length = 0;
      res.forEach(op => {
        this.OPChartData[0].data.push(op.harga.toString());
        this.OPChartLabels.push(op.tanggal.toString());
      });
      
      this.OPChartData = this.OPChartData.reverse();
      this.OPChartLabels = this.OPChartLabels.reverse();

      this.updateChart();

    })
  }

  updateChart() {
    setTimeout(() => {
      this.OPChartData = this.OPChartData.slice();
    },300);    
  }

}
