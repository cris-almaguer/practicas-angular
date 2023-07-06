import { Order } from './../interfaces/order-interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order-filter'
})

export class PizzeriaFilterPipe implements PipeTransform
{

  transform = (value: Order[], args: string) : Order[] =>
  {
    let filter: string = args ? args.toLowerCase() : '';
    return filter ? value.filter((pedido: Order) => this.matchFilter(pedido.date, filter)) : value;
  }

  matchFilter = (date: string, filter: string) : boolean =>
  {
    if (filter.startsWith('mes:'))
    {
      const month = filter.split(':')[1];
      const orderMonth = new Date(date).getMonth() + 1;
      return orderMonth.toString() === month;
    }

    if (filter.startsWith('dia:'))
    {
      const day = filter.split(':')[1];
      const orderDay = date.substring(date.length - 2);
      const formattedDay = day.length === 1 ? '0' + day : day;
      return orderDay === formattedDay;
    }

    return true;
  }
}


