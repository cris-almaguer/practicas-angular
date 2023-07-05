export default class Cinema
{
  buyerName:string;
  cineCard:string;
  ticketsQuantity:number;
  buyersQuantity:number;
  result:number = 0;

  constructor(buyerName:string, cineCard:string, ticketsQuantity:number = 0, buyersQuantity:number = 0)
  {
    this.buyerName = buyerName;
    this.cineCard = cineCard;
    this.ticketsQuantity = ticketsQuantity;
    this.buyersQuantity = buyersQuantity;
  }

  public generateResult = () : void =>
  {
    const maxTickets:number = this.buyersQuantity * 7;

    if (this.ticketsQuantity > maxTickets)
    {
      this.result = -1;
      return;
    }

    this.result = this.ticketsQuantity * 12;

    if (this.ticketsQuantity > 5)
    {
      this.result = this.result - this.result * 0.15;
    }
    else if(this.ticketsQuantity >= 3 && this.ticketsQuantity <=5)
    {
      this.result = this.result - this.result * 0.10;
    }

    if (this.cineCard)
    {
      this.result = this.result * 0.90;
    }
  }
}
