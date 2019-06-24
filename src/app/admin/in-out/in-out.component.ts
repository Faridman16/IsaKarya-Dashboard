import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css']
})
export class InOutComponent implements OnInit {
  
  pemasukan: number = 0;
  pengeluaran: number = 0;
  selisih: number = 0;

  //TABS
  activeTab = 'harian';

  constructor() { }

  ngOnInit() {
  }
  
  tab(opsi){
    if(opsi=='harian')this.activeTab = 'harian';
    if(opsi=='bulanan')this.activeTab = 'bulanan';
    if(opsi=='tahunan')this.activeTab = 'tahunan';
  }

}
