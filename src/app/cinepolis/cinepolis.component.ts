import { Component } from '@angular/core';
import Cinema from './cine/utils/cinema';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})

export class CinepolisComponent
{
  buyerName:string = '';
  cineCard:string = '';
  ticketsQuantity:number = 0;
  buyersQuantity:number = 0;
  result:number = 0;
  cinemaObject!: Cinema;

  public calculateResult = () : void =>
  {
    this.cinemaObject = new Cinema(this.buyerName, this.cineCard, this.ticketsQuantity, this.buyersQuantity);
    this.cinemaObject.generateResult();
    this.result = this.cinemaObject.result;
  }
}
