import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ChartDataSets } from 'chart.js';
import { OperationalService } from './operational.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  // opArray = ;
  private dataOP: ChartDataSets[] = [
    {
      data: [],
      label: 'Active Users',
      pointBorderWidth: 2,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      fill: true,
      borderWidth: 2,
    }
  ]

  constructor(
    private http: HttpClient,
    private opService: OperationalService,
  ) { }

  getOPChartData(): ChartDataSets[]{
    this.opService.getOperationalList(5).subscribe(res => {
      res.forEach(op => {
        this.dataOP[0].data.push(op.harga.toString());
      });
      
    });
    return this.dataOP;      
  }

}
