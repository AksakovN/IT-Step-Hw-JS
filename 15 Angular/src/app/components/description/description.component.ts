import { Component, Input, OnInit, } from '@angular/core';
import { Serv1Service } from 'src/app/services/serv1.service';
import { IDrinks } from '../card/card.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']
})
export class DescriptionComponent implements OnInit {

  @Input() descr!: IDrinks[];
  @Input() isShowDesc!: boolean;
  @Input() idSwitch!: number;

  
  constructor(private serveService: Serv1Service) { 
    this.isShowDesc = true;
  }

  ngOnInit(): void {
    this.serveService.bType$.subscribe((bType) => this.log(bType)); 
  }
  
  private log(data: boolean): void {   
    this.isShowDesc = data;
  }

  public handlerClick() {
    this.serveService.bType$.next(!this.isShowDesc); 
  }
}

