import { Component, OnInit } from '@angular/core';
import { UtilitesService } from 'src/app/_services/utilites.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from 'src/app/_services/filter.service';
import { OperationalService } from 'src/app/_services/operational.service';
import { InoutService } from 'src/app/_services/inout.service';

@Component({
  selector: 'app-laporan-keuangan',
  templateUrl: './laporan-keuangan.component.html',
  styleUrls: ['./laporan-keuangan.component.css']
})
export class LaporanKeuanganComponent implements OnInit {

  op: FormGroup;
  months: Array<object>;
  years: Array<object>;

  constructor(
    private dateService: UtilitesService,
    private filterService: FilterService,
    private opService: OperationalService,
    private inoutService: InoutService,
  ) {this.createFilter()}

  createFilter(){
    this.op = new FormGroup({
      month: new FormControl(''),
      year: new FormControl(''),
    });
  }

  getFilter(){
    this.filterService.getMonths().subscribe(res => {
      this.months = res;
    });

    this.filterService.getYears().subscribe(res => {
      this.years = res;
    });
  }

  getData(){
    this.opService.getOperationalList
  }

  ngOnInit() {
    console.log(this.dateService.getTime());
    this.getFilter();
  }

}
