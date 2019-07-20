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

  getInOuts(): Observable<InoutModel[]>{
    return this.http.get<InoutModel[]>(environment.api+'inout/');
  }

  getCategory(type): Observable<any[]>{
    return this.http.get<any[]>(environment.api+'category/?fetch='+type);
  }

  addTrx(transaction): Observable<any>{
    return this.http.post<InoutModel>(environment.api+'inout/',transaction);
  }

}
