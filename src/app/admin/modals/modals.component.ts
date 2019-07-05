import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Form, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  trx: FormGroup;
  nominal:string;

  @Input() title = `Information`;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private datePipe: DatePipe,    
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
    // const curr:number = this.trx.value.jumlah
    // this.trx.setValue(this.trx.getRawValue);
    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.trx.value.jumlah));
    this.nominal = this.trx.value.jumlah;
    console.log(this.nominal);
    // this.trx.valueChanges() = curr;
    // this.trx.patchValue({
    //   jumlah: curr, 
    //   // formControlName2: myValue2 (can be omitted)
    // });
  }

  formater(event){
    console.log(event);
  }

}