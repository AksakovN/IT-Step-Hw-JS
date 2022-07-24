import { Component, Input, OnInit, Output,} from '@angular/core';
import { Serv1Service } from 'src/app/services/serv1.service';

export interface IDrinks {
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: any;
  strIngredient2: any;
  strIngredient3: any;
  strIngredient4: any;
  strIngredient5: any;
  strIngredient6: any;
  strIngredient7: any;
  strMeasure1: any;
  strMeasure2: any;
  strMeasure3: any;
  strMeasure4: any;
  strMeasure5: any;
  strMeasure6: any;
  strMeasure7: any;
  id: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() card!: IDrinks;
  @Input() idSwitch!: number;

  public isShowDesc: boolean = false;

  public handlerClick() {
    this.serveService.bType$.next(!this.isShowDesc);
    this.idSwitch = this.card.id;
    this.setId();   
  }

  constructor(private serveService: Serv1Service) { }

  public setId(): void {
    this.serveService.changeidCheck(this.card.id);
  } 

  ngOnInit(): void { }
}
