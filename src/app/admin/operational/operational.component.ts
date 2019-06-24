import { Component, OnInit } from '@angular/core';
import { OperationalService } from 'src/app/_services/operational.service';
import { OperationalModel } from 'src/app/_models/operationalModel';

@Component({
  selector: 'app-operational',
  templateUrl: './operational.component.html',
  styleUrls: ['./operational.component.css']
})
export class OperationalComponent implements OnInit {
  
  operationalList: Array<OperationalModel>;
  isTambah: Boolean = false;

  //POSISI KEUANGAN
  posisiKeuanganList = [];
  detailPosisiKeuanganList = [];
  pemasukan: number = 0;
  pengeluaran: number = 0;
  selisih: number = 0;

  //TABS
  activeTab = 'harian';

  constructor(private opService: OperationalService) { }

  ngOnInit() {
    this.getOP();
  }

  getOP(){
    this.opService.getOperationalList().subscribe(result => {
      console.log(result);
      this.operationalList = result
    });
  }

  addOP(){
    this.getOP();
    this.toogleOP();
  }

  toogleOP(){
    this.isTambah = !this.isTambah;
  }

  cancel(){
    this.toogleOP();
  }

  tab(opsi){
    if(opsi=='harian')this.activeTab = 'harian';
    if(opsi=='bulanan')this.activeTab = 'bulanan';
    if(opsi=='tahunan')this.activeTab = 'tahunan';
  }

}
