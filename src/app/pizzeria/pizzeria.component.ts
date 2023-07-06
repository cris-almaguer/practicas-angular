import { getCurrentDate } from './utils/pizzas-utils';
import { Order } from './interfaces/order-interface';
import { OrderDetail } from './interfaces/order-detail-interface';
import { Client } from './interfaces/client-interface';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})

export class PizzeriaComponent
{
  pizzaForm!:FormGroup;
  filterValue:string = '';
  totalSum:number = 0;
  showTable:boolean=false;
  client:Client =
  {
    name: '',
    address: '',
    phoneNumber: ''
  };
  orderDetail: OrderDetail[] = [];
  currentDate:string = getCurrentDate();
  order: Order =
  {
    client: this.client,
    orders: this.orderDetail,
    total: 0,
    date: this.currentDate
  };
  orderArray: Order[] = [];

  public ingredients = ["Jamón", "Piña", "Champiñones"];

  constructor(private readonly fb:FormBuilder)
  {
    this.pizzaForm = this.initForm();
  }

  initForm(): FormGroup
  {
    let ingredientesFormArray = this.fb.array([]);
    this.ingredients.forEach(() => ingredientesFormArray.push(this.fb.control(false)));
    return this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      size: ['Chica', [Validators.required]],
      ingredients: ingredientesFormArray,
      quantity: ['', [Validators.required]],
      date: [this.currentDate, [Validators.required]],
    });
  }

  addDetail = () : void =>
  {
    const orderDetail:OrderDetail =
    {
      size: '',
      ingredients: [],
      quantity: 0,
      subTotal: 0,
    }

    const ingredientesSeleccionados = this.pizzaForm.get('ingredients')?.value;
    const ingredientesSeleccionadosArray = this.ingredients.filter((_, i) => ingredientesSeleccionados[i]);
    orderDetail.ingredients =ingredientesSeleccionadosArray

    this.client.name = this.pizzaForm.get('name')?.value;
    this.client.address = this.pizzaForm.get('address')?.value;

    this.client.phoneNumber = this.pizzaForm.get('phoneNumber')?.value;
    orderDetail.size = this.pizzaForm.get('size')?.value;
    orderDetail.quantity = this.pizzaForm.get('quantity')?.value;
    this.order.date = this.currentDate;

    if(orderDetail.quantity <=  0)
    {
      alert('Debes de ingresar una cantidad valida')
    }
    else
    {
      let ingredientCost = 0;
      orderDetail.ingredients.forEach(() => ingredientCost += 10);

      switch (orderDetail.size)
      {
        case "Chica":
          orderDetail.subTotal += orderDetail.quantity * (40 + ingredientCost);
          break;
        case "Mediana":
          orderDetail.subTotal += orderDetail.quantity * (80 + ingredientCost);
          break;
        case "Grande":
          orderDetail.subTotal += orderDetail.quantity * (120 + ingredientCost);
          break;
      }

      this.orderDetail.push
      ({
        ingredients: orderDetail.ingredients,
        quantity: orderDetail.quantity,
        size: orderDetail.size,
        subTotal: orderDetail.subTotal,
      });
    }
  }

  calculateTotal = (): void =>
  {
    if (this.orderDetail.length === 0)
    {
      alert('Debe agregar al menos una pizza');
      return;
    }

    if (confirm(`Total: ${this.getTotal()} \n ¿Deseas finalizar el pedido?`))
    {
      this.order.orders = this.orderDetail
      this.order.client = this.client
      for (const orderDetail of this.order.orders)
      {
        this.order.total += orderDetail.subTotal;
      }
      this.orderArray.push(this.order)
      this.totalSum += this.order.total
      this.showTable = true;
      this.pizzaForm.reset();
      this.cleanArrays();
    }
  }

  getTotal = (): number =>
  {
    let subTotal = 0;
    for (const orderDetail of this.order.orders)
    {
      subTotal += orderDetail.subTotal;
    }
    return subTotal;
  }

  deleteDetail = (index: number): void =>
  {
    this.order.orders.splice(index,1);
  }

  cleanArrays = (): void =>
  {
    this.client =
    {
      name: '',
      address: '',
      phoneNumber: ''
    };
    this.orderDetail = [];
    this.order =
    {
      client: this.client,
      orders: this.orderDetail,
      total: 0,
      date: this.currentDate
    };
  }
}
