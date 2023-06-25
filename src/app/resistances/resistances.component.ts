import { Component } from '@angular/core';

@Component({
  selector: 'app-resistances',
  templateUrl: './resistances.component.html',
  styleUrls: [
    './resistances.component.css',
    // './../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ],
})
export class ResistancesComponent {
  v: number = 0;
  v1: string = '';
  v2: string = '';
  v3: number = 0;
  result: number = 0;
  positiveVal: number = 0;
  negativeVal: number = 0;
  band1: string = '';
  band2: string = '';
  band3: string = '';
  radioSelected: string = '';
  radioOptions = ['plata', 'oro'];
  colors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];

  calculateResult = (): void => {
    this.getValueColors(this.band1);
    this.v1 = String(this.v);
    this.getValueColors(this.band2);
    this.v2 = String(this.v);
    this.getValueColors(this.band3);
    this.result = (Number(this.v1) * 10 + Number(this.v2)) * this.v3;
    this.calculate();
  };

  calculate = () => {
    switch (this.radioSelected) {
      case 'oro':
        this.positiveVal = this.result + (this.result * 0.05);
        this.negativeVal = this.result - (this.result * 0.05);
        break;
      case 'plata':
        this.positiveVal = this.result + (this.result * 0.1);
        this.negativeVal = this.result - (this.result * 0.1);
        break;
    }
  };

  getValueColors = (c: string): void => {
    switch (c) {
      case 'black':
        this.v3 = 1;
        this.v = 0;
        break;
      case 'brown':
        this.v3 = 10;
        this.v = 1;
        break;
      case 'red':
        this.v3 = 100;
        this.v = 2;
        break;
      case 'orange':
        this.v3 = 1000;
        this.v = 3;
        break;
      case 'yellow':
        this.v3 = 10000;
        this.v = 4;
        break;
      case 'green':
        this.v3 = 100000;
        this.v = 5;
        break;
      case 'blue':
        this.v3 = 1000000;
        this.v = 6;
        break;
      case 'violet':
        this.v3 = 10000000;
        this.v = 7;
        break;
      case 'grey':
        this.v3 = 100000000;
        this.v = 8;
        break;
      case 'white':
        this.v3 = 1000000000;
        this.v = 9;
        break;
    }
  };
}
