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

  imgUrlBRI: any = '../assets/img/bg1.jpg';
  imgUrlBNI1: any = '../assets/img/bg1.jpg';
  imgUrlBNI2: any = '../assets/img/bg1.jpg';

  constructor(
    private saldoService: SaldoPerusahaanService,
    private uploadService: UploadService,
    private datePipe: DatePipe,
  ) {this.getRekKoranURL()}

  getData(){
    this.saldoService.getPosSaldo().subscribe(res => {
      // console.log(res)
      this.posKeuangan = res;
    });
  }

  getRekKoranURL(){
    this.saldoService.getImgUrlRek().subscribe(res => {
      console.log(res);
      res.forEach(rekSaldo => {
        console.log(rekSaldo.name_rek);
        if(rekSaldo.name_rek=='BRI'){
          this.imgUrlBRI = rekSaldo.img_url;
        }else if(rekSaldo.name_rek=='BNI1'){
          this.imgUrlBNI1 = rekSaldo.img_url;
        }else if(rekSaldo.name_rek='BNI2'){
          this.imgUrlBNI2 = rekSaldo.img_url;
        }
      });
      console.log(this.imgUrlBRI);
    });
  }

  ngOnInit() {
    this.getData();
    // this.getRekKoranURL();
  }

  uploadRekKoran(event,rekening){
    event.preventDefault();
    console.log(rekening);
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (_event) => { 
        rekening=='2'?this.imgUrlBRI=reader.result:'';
        rekening=='3'?this.imgUrlBNI1=reader.result:'';
        rekening=='4'?this.imgUrlBNI2=reader.result:'';
      }
    }    
    this.isUploading = true;
    this.uploadService.uploadRekKoran(this.file).then(result => {
      console.log('Upload Sukses!');
      this.uploadUrl = result;
      const rekKoran = {
        tanggal: this.datePipe.transform(Date.now(), 'yyyy-MM-dd'),
        id_rekening: rekening,
        img_url: result,
      }
      this.saldoService.addRekKoran(rekKoran).subscribe(res => {
        console.log(res);
        this.isUploading = false;
      })
    });
    
  }

}
