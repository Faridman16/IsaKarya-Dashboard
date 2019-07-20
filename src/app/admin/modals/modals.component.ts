import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Form, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { InoutService } from 'src/app/_services/inout.service';
import { Router } from '@angular/router';
import { EventEmitterService } from 'src/app/_services/event-emitter.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  trx: FormGroup;
  nominal:string;
  categoryList;

  @Input() title = `Information`;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private datePipe: DatePipe,    
    private inout: InoutService,
    private router: Router,
    private eventEmitterService: EventEmitterService,
  ) {this.createForm();}

  createForm() {
    const dateNow = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    this.trx = new FormGroup({
      type: new FormControl('', [Validators.required]),
      tanggal: new FormControl(dateNow, [Validators.required]),
      kategori: new FormControl('', [Validators.required]),
      jumlah: new FormControl('', [Validators.required]),
      keterangan: new FormControl('', [Validators.required]),
    });
  }  

  ngOnInit() {
  }

  currencyFormat(event) {
    this.nominal = this.trx.value.jumlah;
  }

  addTrx(){
    let trx = this.trx.value;
    if(trx.type == 'Pemasukan'){
      trx.income = trx.jumlah;
      trx.outcome = 0;
    }else {
      trx.outcome = trx.jumlah;
      trx.income = 0;
    }
    console.log(trx);
    this.inout.addTrx(trx).subscribe( res => {
      console.log(res);
      this.activeModal.close('Close click');
      this.eventEmitterService.onAdd();
    },
    err => {
      console.log(err);
    }
  );
    this.createForm();
  }   

  changeType(event){
    this.inout.getCategory(this.trx.value.type).subscribe(res =>{
      this.categoryList = res;
      console.log(this.categoryList);
    });
  }  

}