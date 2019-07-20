import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../_models/categoryModel';

@Injectable({
  providedIn: 'root'
})
export class UtilitesService {

  constructor(
    private http: HttpClient
  ) { }

  addCtg(ctg): Observable<object> {
    return this.http.post(environment.api+'category/',ctg);
  }

  getCtgPemasukan(): Observable<Array<object>> {
    return this.http.get<Array<object>>(environment.api+'category/?fetch=Pemasukan');
  }

  getCtgPengeluaran(): Observable<Array<object>> {
    return this.http.get<Array<object>>(environment.api+'category/?fetch=Pengeluaran');
  }
}
