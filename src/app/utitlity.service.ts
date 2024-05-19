import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtitlityService {

  
  currentStatus :BehaviorSubject<string>=new BehaviorSubject('')
  
  constructor() { }

changeCurrentStatus(msg:string){
  this.currentStatus.next(msg)
}
}
