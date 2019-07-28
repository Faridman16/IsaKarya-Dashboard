import { Component, OnInit } from '@angular/core';
import { UtilitesService } from 'src/app/_services/utilites.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from 'src/app/_services/filter.service';
import { OperationalService } from 'src/app/_services/operational.service';
import { InoutService } from 'src/app/_services/inout.service';
import { SaldoPerusahaanService } from 'src/app/_services/saldo-perusahaan.service';

@Component({
  selector: 'app-saldo-perusahaan',
  templateUrl: './saldo-perusahaan.component.html',
  styleUrls: ['./saldo-perusahaan.component.css']
})
export class SaldoPerusahaanComponent implements OnInit {

  op: FormGroup;
  months: Array<object>;
  years: Array<object>;
  saldoList: Array<object>;

  constructor(
    private dateService: UtilitesService,
    private saldoService: SaldoPerusahaanService,
    private inoutService: InoutService,
  ) {this.createFilter()}

  createFilter(){
    this.op = new FormGroup({
      month: new FormControl(''),
      year: new FormControl(''),
    });
  }

  getData(){
    this.saldoService.getPosSaldo().subscribe(res => {
      this.saldoList = res;
    });
  }

  ngOnInit() {
    console.log(this.dateService.getTime());
    this.getData();
  }

}
