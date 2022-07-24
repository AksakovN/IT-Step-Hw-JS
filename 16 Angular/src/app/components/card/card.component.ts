import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';

export interface ICard {
  id: number;
  color: string;
  isSelect: boolean;
  isShow: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() card!: ICard;
  @Output() eventClick = new EventEmitter();

  public handleClick() {
    if (this.card.isSelect) {     
      return;
    }
       
    this.card.isShow = true;
    this.eventClick.emit();
  }

  constructor() { }

  ngOnInit(): void {  
}
}
