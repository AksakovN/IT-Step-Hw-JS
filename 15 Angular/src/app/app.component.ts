import { Component, Input } from '@angular/core';
import drinks from 'src/assets/data/drinks';
import { IDrinks } from './components/card/card.component';
import { Serv1Service } from './services/serv1.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @Input() isShowDesc!: boolean;

  public drinks!: IDrinks;
  public drinksData: IDrinks[] = [];
  public idSwitch!: number;

  public drinkData() {
    for (let i = 0; i < drinks.length; i++) {
      this.drinks = {
        strDrink: drinks[i].strDrink,
        strInstructions: drinks[i].strInstructions,
        strDrinkThumb: drinks[i].strDrinkThumb,
        strIngredient1: drinks[i].strIngredient1,
        strIngredient2: drinks[i].strIngredient2,
        strIngredient3: drinks[i].strIngredient3,
        strIngredient4: drinks[i].strIngredient4,
        strIngredient5: drinks[i].strIngredient5,
        strIngredient6: drinks[i].strIngredient6,
        strIngredient7: drinks[i].strIngredient7,
        strMeasure1: drinks[i].strMeasure1,
        strMeasure2: drinks[i].strMeasure2,
        strMeasure3: drinks[i].strMeasure3,
        strMeasure4: drinks[i].strMeasure4,
        strMeasure5: drinks[i].strMeasure5,
        strMeasure6: drinks[i].strMeasure6,
        strMeasure7: drinks[i].strMeasure7,
        id: i,
      };
      this.drinksData.push(this.drinks);
    }
  }

  public handlerClick() {
    this.isShowDesc = this.isShowDesc;
  }

  constructor(private serveService: Serv1Service) { }
  
  ngOnInit(): void {
    this.serveService.bType$.subscribe((bType) => this.log(bType));
    this.serveService.idCheck$.subscribe((idCheck) => this.handleId(idCheck));
    this.drinkData();
  }

  private log(data: boolean): void {
    this.isShowDesc = data;
  }
  private handleId(data: number): void {
    this.idSwitch = data;
  }
}
