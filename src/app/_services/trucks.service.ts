import { Injectable } from '@angular/core';
import { TrucksModel } from '../_models/trucksModel';
import { TrucksMock } from '../_mocks/trucksMock';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  getAllTrucks(): Observable<TrucksModel[]> {
    return of(TrucksMock);
  }

  getTruckById(id: number): Observable<TrucksModel> {
    return this.getAllTrucks().pipe((
      map(trucks => trucks.find(truck => truck.id === +id))
    ));
  }

  constructor() { }
}
