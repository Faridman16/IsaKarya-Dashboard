import { Component, OnInit } from '@angular/core';
import { OperationalService } from 'src/app/_services/operational.service';
import { OperationalModel } from 'src/app/_models/operationalModel';
import { FormBuilder, Form, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-operational',
  templateUrl: './operational.component.html',
  styleUrls: ['./operational.component.css']
})
export class OperationalComponent implements OnInit {
  op: FormGroup;
  operationalList: Array<OperationalModel>;
  isTambah: Boolean = false;

  //POSISI KEUANGAN
  posisiKeuanganList = [];
  detailPosisiKeuanganList = [];
  supir = 1880000;
  modal = 26000000;

  constructor(
    private opService: OperationalService,
    private datePipe: DatePipe,
    ) {
      this.createForm();
    }

  ngOnInit() {
    this.getOP();
  }

  createForm() {
    const dateNow = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    this.op = new FormGroup({
      tanggal: new FormControl(dateNow, [Validators.required]),
      trip: new FormControl('4', [Validators.required]),
      qty: new FormControl('2240', [Validators.required]),
      harga: new FormControl('14000', [Validators.required]),
      jumlah: new FormControl('31360000', [Validators.required]),
      supir: new FormControl('1880000', [Validators.required]),
      modal: new FormControl('26000000', [Validators.required]),
      fee: new FormControl('3480000', [Validators.required]),
    });
  } 

  getOP(){
    this.opService.getOperationalList('all').subscribe(result => {
      this.operationalList = result
    });
  }

  addOP(){
    this.op.patchValue({
      supir: this.supir,
      modal: this.modal,
    });

    this.opService.addOperational(this.op.value).subscribe( res => {
      this.operationalList.unshift(this.op.value);
      console.log(this.operationalList);
    },
      err => {
        console.log(err);
      }
    );
    // this.createForm();
  }

  toogleOP(){
    this.isTambah = !this.isTambah;
    console.log(this.isTambah);
  }

  cancel(){
    this.toogleOP();
  }

  tripChange(){
    const qtyValue = Number(this.op.value.trip)*560;
    const jumlahValue = qtyValue*Number(this.op.value.harga);
    const opSopir = 470000;
    const modal = 6500000;
    const fee = (560*Number(this.op.value.harga)) - opSopir - modal;
    const totalFee = fee*Number(this.op.value.trip);

    this.supir = opSopir*Number(this.op.value.trip);
    this.modal = modal*Number(this.op.value.trip);
    this.op.patchValue({
      qty: qtyValue,
      jumlah: jumlahValue,
      fee: totalFee,
    });
  }

}
