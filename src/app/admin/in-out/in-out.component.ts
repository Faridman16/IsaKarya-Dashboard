import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalsComponent } from '../modals/modals.component';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css']
})
export class InOutComponent implements OnInit {

  posisiKeuanganList = [];
  pemasukan: number = 0;
  pengeluaran: number = 0;
  selisih: number = 0;

  //TABS
  activeTab = 'harian';

  constructor(private modalService: NgbModal) {}


  ngOnInit() {
  }
  
  tab(opsi){
    if(opsi=='harian')this.activeTab = 'harian';
    if(opsi=='bulanan')this.activeTab = 'bulanan';
    if(opsi=='tahunan')this.activeTab = 'tahunan';
  }

  open() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(ModalsComponent);
    modalRef.componentInstance.title = 'About';
  }  

}
