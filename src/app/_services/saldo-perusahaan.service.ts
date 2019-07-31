import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaldoPerusahaanService {

  constructor(
    private http: HttpClient
  ) { }

  getPosSaldo(): Observable<Object[]>{
    return this.http.get<Object[]>(environment.api+'posisi_saldo/');
  }

  getPSData(): Observable<any>{
    return this.http.get<Object[]>(environment.api+'posisi_saldo/?fetch=12');
  }

  getImgUrlRek(): Observable<any>{
    return this.http.get<any>(environment.api+'posisi_saldo/rek_koran/');
  }

  addRekKoran(rekKoran): Observable<Object[]>{
    console.log(rekKoran);
    return this.http.post<Object[]>(environment.api+'posisi_saldo/',rekKoran);
  }

}
