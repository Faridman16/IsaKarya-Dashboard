import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { OperationalModel } from '../_models/operationalModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationalService {

  constructor(private fireDB: AngularFireDatabase, private http: HttpClient) { }

  getOperationalList(): Observable<OperationalModel[]>{
    return this.fireDB.list<OperationalModel>('operational').valueChanges();
  }

  addOperational(operational: OperationalModel){
    return this.http.post('localhost:4300/op', operational)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
