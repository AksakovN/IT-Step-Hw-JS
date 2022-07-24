import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

  public bType$ = new Subject<boolean>();

  public changebType(bType: boolean) {
     this.bType$.next(bType);
  };

  public idCheck$ = new Subject<number>();

  public changeidCheck(idCheck: number) {
     this.idCheck$.next(idCheck);   
  };
  constructor() { }
}
