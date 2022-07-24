import { Component } from '@angular/core';
import { ICard } from './components/card/card.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public cards: ICard[] = [];

  public cardCount: number = 0;
  public counterShow: number = 0;
  public isStart: boolean = false;

  public handlerSelect() {
    this.counterShow++;
    if (this.counterShow === 2) {
      const selectCards = this.cards.filter(
        (card: ICard) => !card.isSelect && card.isShow
      );

      if (selectCards[0].color !== selectCards[1].color) {
        setTimeout(() => {
          this.cards = this.cards.map((card: ICard) =>
            card.isSelect
              ? card
              : {
                ...card,
                isShow: false,
              }
          );
          this.counterShow = 0;
        }, 1000);
      } else {
        this.cards = this.cards.map((card: ICard): ICard => {
          if (card.color === selectCards[0].color) {
            this.cardCount++;
            if (this.cardCount === 8) {
              setTimeout(() => {
                alert('You won!');
              }, 1000)
            }
            return { ...card, isSelect: true };
          } else {
            return card;
          }
        });
        this.counterShow = 0;
      }
    } else if (this.counterShow > 1) {
      this.cards = this.cards.map((card: ICard) =>
        card.isSelect
          ? card
          : {
            ...card,
            isShow: false,
          }
      );
      this.counterShow = 0;
    }
  }

  public handlerStart(event: any) {
    this.cards = [];
    this.isStart = true;
    this.cardCount = 0;
    this.randomize();
    event.target.innerText = 'Retry';
    
    this.cards = this.cards.map((card: ICard) => ({
      ...card,
      isShow: true,
    }));

    setTimeout(() => {
      this.cards = this.cards.map((card: ICard) => ({
        ...card,
        isShow: false,
      }));
      this.isStart = false;
    }, 2000);
  }

  constructor() { }

  ngOnInit(): void {
    this.randomize();
  }

  private randomize() {
    const random = (max: number): number => {
      return Math.floor(Math.random() * (max - 1));
    };

    const colors: { color: string; quantity: number }[] = [
      { color: 'red', quantity: 2 },
      { color: 'green', quantity: 2 },
      { color: 'blue', quantity: 2 },
      { color: 'yellow', quantity: 2 },
    ];

    let colorIndex: number;
    while (this.cards.length < 8) {
      colorIndex = random(5);
      if (colors[colorIndex].quantity > 0) {
        this.cards.push({
          id: colors.length + 1,
          color: colors[colorIndex].color,
          isSelect: false,
          isShow: false,
        });
        colors[colorIndex].quantity--;
      }
    }
  }


}
