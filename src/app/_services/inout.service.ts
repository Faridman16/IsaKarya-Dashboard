import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { InoutModel } from '../_models/inoutModel';

@Injectable({
  providedIn: 'root'
})
export class InoutService {
  
  constructor(
    private http: HttpClient,
  ) { }

  getInOuts(period): Observable<any>{
    let apiUrl;
    switch (period){
      case 'harian':
        apiUrl = environment.api+'inout/harian/'; break;
      case 'bulanan':
        apiUrl = environment.api+'inout/bulanan/'; break; 
      case 'tahunan':
        apiUrl = environment.api+'inout/tahunan/'; break; 
    }
    return this.http.get<InoutModel[]>(apiUrl);
  }

  getCategory(type): Observable<any[]>{
    return this.http.get<any[]>(environment.api+'category/?fetch='+type);
  }

  getInoutReport(filter): Observable<InoutModel[]>{
    return this.http.post<InoutModel[]>(environment.api+'inout/report/',filter);
  }  

  addTrx(transaction): Observable<any>{
    return this.http.post<InoutModel>(environment.api+'inout/',transaction);
  }

}
