import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { OperationalModel } from '../_models/operationalModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationalService {

  constructor(private fireDB: AngularFireDatabase, private http: HttpClient) { }

  getOperationalList(day): Observable<OperationalModel[]>{
    console.log(day)
    if(day=='all')return this.http.get<OperationalModel[]>(environment.api+'op/');
    if(day==7)    return this.http.get<OperationalModel[]>(environment.api+'op/?fetch=7');
    
    // return this.fireDB.list<OperationalModel>('operational').valueChanges();
  }

  getOperanionalReport(filter): Observable<OperationalModel[]>{
    return this.http.post<OperationalModel[]>(environment.api+'op/report/',filter);
  }

  addOperational(operational: OperationalModel): Observable<any>{
    return this.http.post<OperationalModel>(environment.api+'op/',operational);
  }
}
