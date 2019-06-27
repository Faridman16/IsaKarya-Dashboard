import { Component, OnInit } from '@angular/core';
import { OperationalService } from 'src/app/_services/operational.service';
import { OperationalModel } from 'src/app/_models/operationalModel';
import { FormBuilder, Form, FormGroup, FormControl, Validator, Validators } from '@angular/forms';

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
    ) {
      this.createForm();
    }

  ngOnInit() {
    this.getOP();
  }

  createForm() {
    this.op = new FormGroup({
      tanggal: new FormControl('', [Validators.required]),
      trip: new FormControl('', [Validators.required]),
      qty: new FormControl('', [Validators.required]),
      harga: new FormControl('', [Validators.required]),
      jumlah: new FormControl('', [Validators.required]),
      fee: new FormControl('', [Validators.required]),
    });
  } 

  getOP(){
    this.opService.getOperationalList().subscribe(result => {
      console.log(result);
      this.operationalList = result
    });
  }

  addOP(){
    this.toogleOP();
    
  }

  toogleOP(){
    this.isTambah = !this.isTambah;
  }

  cancel(){
    this.toogleOP();
  }

}
