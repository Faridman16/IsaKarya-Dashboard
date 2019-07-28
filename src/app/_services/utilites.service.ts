import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../_models/categoryModel';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilitesService {

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
  ) { }

  //CATEGORY
  addCtg(ctg): Observable<object> {
    return this.http.post(environment.api+'category/',ctg);
  }

  getCtgPemasukan(): Observable<Array<object>> {
    return this.http.get<Array<object>>(environment.api+'category/?fetch=Pemasukan');
  }

  getCtgPengeluaran(): Observable<Array<object>> {
    return this.http.get<Array<object>>(environment.api+'category/?fetch=Pengeluaran');
  }

  //GLOBAL TIME
  getTime(){
    return Date.now();
  }

  getDate(){
    return this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
  }  

  getYear(){
    return (this.datePipe.transform(Date.now(), 'yyyy-MM-dd').substr(0,4));
  }

  getMonth(){
    const month = (this.datePipe.transform(Date.now(), 'yyyy-MM-dd').substr(5,2));
    let bulan = '';
    switch (month){
      case '01': bulan = 'Januari'; break;
      case '02': bulan = 'Februari'; break;
      case '03': bulan = 'Maret'; break;
      case '04': bulan = 'April'; break;
      case '05': bulan = 'Mei'; break;
      case '06': bulan = 'Juni'; break;
      case '07': bulan = 'Juli'; break;
      case '08': bulan = 'Agustus'; break;
      case '09': bulan = 'September'; break;
      case '10': bulan = 'Oktober'; break;
      case '11': bulan = 'November'; break;
      case '12': bulan = 'Desember'; break;
    }
    return bulan;
  }

  getDay(){
    return (this.datePipe.transform(Date.now(), 'yyyy-MM-dd').substr(8,2));
  }

  parsBulan(list: Array<{bulan: any}>): Array<any>{
    const map1 = list.map(x => {  	
      switch (x.bulan){
        case '01': x.bulan = 'Januari'; break;
        case '02': x.bulan = 'Februari'; break;
        case '03': x.bulan = 'Maret'; break;
        case '04': x.bulan = 'April'; break;
        case '05': x.bulan = 'Mei'; break;
        case '06': x.bulan = 'Juni'; break;
        case '07': x.bulan = 'Juli'; break;
        case '08': x.bulan = 'Agustus'; break;
        case '09': x.bulan = 'September'; break;
        case '10': x.bulan = 'Oktober'; break;
        case '11': x.bulan = 'November'; break;
        case '12': x.bulan = 'Desember'; break;
      }

      return x

    });  
    console.log(map1);
    return map1;
  }
}
