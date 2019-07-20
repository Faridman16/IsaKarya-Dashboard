import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalsComponent } from '../modals/modals.component';
import { InoutService } from 'src/app/_services/inout.service';
import { EventEmitterService } from 'src/app/_services/event-emitter.service';
import { UtilitesService } from 'src/app/_services/utilites.service';
import { CategoryModalsComponent } from '../category-modals/category-modals.component';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css']
})
export class InOutComponent implements OnInit {

  trxList = [];
  incomes = [];
  outcomes = [];

  sumIncome = 0;
  sumOutcome = 0;

  pemasukan: number = 0;
  pengeluaran: number = 0;
  selisih: number = 0;

  posisiKeuanganList = [];
  detailPosisiKeuanganList = [];

  //TABS
  activeTab = 'harian';

  constructor(
    private modalService: NgbModal,
    private inout: InoutService,
    private utilService: UtilitesService,
    private eventEmitterService: EventEmitterService,
    ) {}


  ngOnInit() {
    this.getData();
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.eventEmitter.subscribe((name:string) => {    
        this.getData();   
      });    
    } 
  }
  
  tab(opsi){
    if(opsi=='harian')this.activeTab = 'harian';
    if(opsi=='bulanan')this.activeTab = 'bulanan';
    if(opsi=='tahunan')this.activeTab = 'tahunan';
  }

  getData(){
    this.inout.getInOuts().subscribe(res => {
      this.trxList = res
      console.log(this.trxList);
      this.sumALl();
    });

    this.utilService.getCtgPemasukan().subscribe(resIn => {
      this.incomes = resIn;
    });

    this.utilService.getCtgPengeluaran().subscribe(resOut => {
      this.outcomes = resOut;
    });   
  } 

  sumALl(){
    this.sumIncome = 0;
    this.sumOutcome = 0;
    this.trxList.forEach((trx)=>{
      this.sumIncome += Number(trx.income);
      this.sumOutcome += Number(trx.outcome); 
    });
  }

  openTrx() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(ModalsComponent);
    modalRef.componentInstance.title = 'About';
  } 
  
  openCtg(){
    const modalRef = this.modalService.open(CategoryModalsComponent);
  }

}
