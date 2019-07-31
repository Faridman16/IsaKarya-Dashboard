import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ChartDataSets } from 'chart.js';
import { OperationalService } from './operational.service';
import { SaldoPerusahaanService } from './saldo-perusahaan.service';

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

  private dataPosKeuangan: ChartDataSets[] = [
    {
      data: [],
      label: 'Data',
      pointBorderWidth: 1,
      pointHoverRadius: 7,
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      fill: true,
      borderWidth: 2,
    }
  ]

  constructor(
    private http: HttpClient,
    private opService: OperationalService,
    private posKeuanganService: SaldoPerusahaanService,
  ) { }

  getOPChartData(): ChartDataSets[]{
    this.opService.getOperationalList(7).subscribe(res => {
      res.forEach(op => {
        this.dataOP[0].data.push(op.harga.toString());
      });
      
    });
    return this.dataOP;      
  }

  // getPosKeuanganData(): Observable<any[]>{
  //   return this.posKeuanganService.getPosSaldo(12).subscribe(res => {
  //     res.forEach(posKeuangan => {
  //       this.da
  //     })
  //   });
  // }

}
