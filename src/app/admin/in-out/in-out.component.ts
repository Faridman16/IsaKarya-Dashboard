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

  incomes = [];
  outcomes = [];
  
  // HARIAN
  trxListHarian = [];
  sumIncomeHarian = 0;
  sumOutcomeHarian = 0;
  
  // BULANAN
  trxListBulanan = [];
  sumIncomeBulanan = 0;
  sumOutcomeBulanan = 0;
  
  // TAHUNAN
  trxListTahunan = [];
  sumIncomeTahunan = 0;
  sumOutcomeTahunan = 0;

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
    this.getHarian();
    this.getBulanan();
    this.getTahunan();

    this.utilService.getCtgPemasukan().subscribe(resIn => {
      this.incomes = resIn;
    });

    this.utilService.getCtgPengeluaran().subscribe(resOut => {
      this.outcomes = resOut;
    });   
  } 

  getHarian(){
    this.inout.getInOuts('harian').subscribe(res => {
      this.trxListHarian = res
      console.log(this.trxListHarian);
      this.sumAll('harian');
    });    
  }

  getBulanan(){
    this.inout.getInOuts('bulanan').subscribe(res => {
      const listBulan = this.utilService.parsBulan(res);
      console.log(listBulan);
      this.trxListBulanan = listBulan;
      console.log(this.trxListBulanan);
      this.sumAll('bulanan');
    });
  }

  getTahunan(){
    this.inout.getInOuts('tahunan').subscribe(res => {
      this.trxListTahunan = res
      console.log(this.trxListTahunan);
      this.sumAll('tahunan');
    });
  }

  sumAll(period){
    switch (period){
      case 'harian':
        this.sumIncomeHarian = 0;
        this.sumOutcomeHarian = 0;
        this.trxListHarian.forEach((trx)=>{
          this.sumIncomeHarian += Number(trx.income);
          this.sumOutcomeHarian += Number(trx.outcome); 
        });
        break;
      case 'bulanan':
        this.sumIncomeBulanan = 0;
        this.sumOutcomeBulanan = 0;
        this.trxListBulanan.forEach((trx)=>{
          this.sumIncomeBulanan += Number(trx.income);
          this.sumOutcomeBulanan += Number(trx.outcome); 
        });
        break;      
      case 'tahunan':
        this.sumIncomeTahunan = 0;
        this.sumOutcomeTahunan = 0;
        this.trxListTahunan.forEach((trx)=>{
          this.sumIncomeTahunan += Number(trx.income);
          this.sumOutcomeTahunan += Number(trx.outcome); 
        });
        break;        
    }
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
