import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { OperationalModel } from '../_models/operationalModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationalService {

  constructor(private fireDB: AngularFireDatabase) { }

  getOperationalList(): Observable<OperationalModel[]>{
    return this.fireDB.list<OperationalModel>('operational').valueChanges();
  }

  addOperational(operatioanl: OperationalModel){
    const fireOperational = this.fireDB.database.ref('operational');
    fireOperational.push(operatioanl);
    console.log(operatioanl +' was pushed');
  }
}
