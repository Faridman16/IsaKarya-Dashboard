import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private http: HttpClient,
  ) { }

  getMonths(): Observable<Array<object>>{
    return this.http.get<Array<object>>(environment.api+'filter?filter=month');
  }

  getYears(): Observable<Array<object>>{
    return this.http.get<Array<object>>(environment.api+'filter?filter=year');
  }
}
