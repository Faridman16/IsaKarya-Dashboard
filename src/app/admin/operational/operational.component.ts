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
  op: any;
  operationalList: Array<OperationalModel>;
  isTambah: Boolean = false;

  //POSISI KEUANGAN
  posisiKeuanganList = [];
  detailPosisiKeuanganList = [];

  constructor(
    private opService: OperationalService,
    private fb: FormBuilder,
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
      qty: new FormControl('5', [Validators.required]),
      harga: new FormControl('1500', [Validators.required]),
      jumlah: new FormControl('5', [Validators.required]),
      fee: new FormControl('1500000', [Validators.required]),
    });
  } 

  getOP(){
    this.opService.getOperationalList('all').subscribe(result => {
      console.log(result);
      this.operationalList = result
    });
  }

  addOP(){
    this.toogleOP();
    this.opService.addOperational(this.op.value).subscribe( res => {
      this.operationalList.push(res);
    },
    err => {
      console.log("Error occured");
    }
  );
    this.createForm();
  }

  toogleOP(){
    this.isTambah = !this.isTambah;
    console.log(this.isTambah);
  }

  cancel(){
    this.toogleOP();
  }

}
