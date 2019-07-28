import { Component, OnInit } from '@angular/core';
import { UtilitesService } from 'src/app/_services/utilites.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from 'src/app/_services/filter.service';
import { OperationalService } from 'src/app/_services/operational.service';
import { InoutService } from 'src/app/_services/inout.service';
import { SaldoPerusahaanService } from 'src/app/_services/saldo-perusahaan.service';
import { UploadService } from 'src/app/_services/upload.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-posisi-keuangan',
  templateUrl: './posisi-keuangan.component.html',
  styleUrls: ['./posisi-keuangan.component.css']
})
export class PosisiKeuanganComponent implements OnInit {

  posKeuangan: Array<object>
  file: File;
  imgUrl: any;
  uploadUrl: String;
  isUploading = false;

  imgUrlBRI;
  imgUrlBNI1;
  imgUrlBNI2;

  constructor(
    private saldoService: SaldoPerusahaanService,
    private uploadService: UploadService,
    private datePipe: DatePipe,
  ) {}

  getData(){
    this.saldoService.getPosSaldo().subscribe(res => {
      console.log(res)
      this.posKeuangan = res;
    })

    
  }

  ngOnInit() {
    this.getData();
  }

  uploadRekKoran(event,rekeking){
    event.preventDefault();
    console.log(rekeking);
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (_event) => { 
        this.imgUrl = reader.result; 
      }
    }    
    this.isUploading = true;
    this.uploadService.uploadRekKoran(this.file).then(result => {
      console.log('Upload Sukses!');
      this.uploadUrl = result;
    });
    
    const rekKoran = {
      tanggal: this.datePipe.transform(Date.now(), 'yyyy-MM-dd'),
      id_rekening: rekeking,
      img_url: this.uploadUrl,
    }
    this.saldoService.addRekKoran(rekKoran).subscribe(res => {
      this.isUploading = false;
    })
  }

}
