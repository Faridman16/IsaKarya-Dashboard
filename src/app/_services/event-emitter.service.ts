import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  eventEmitter = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onAdd() {    
    this.eventEmitter.emit();    
  } 
}
