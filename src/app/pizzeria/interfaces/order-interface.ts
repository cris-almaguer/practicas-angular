import { OrderDetail } from './order-detail-interface';
import { Client } from './client-interface';

export interface Order
{
  client: Client;
  orders: OrderDetail[];
  date: string;
  total: number;
}
