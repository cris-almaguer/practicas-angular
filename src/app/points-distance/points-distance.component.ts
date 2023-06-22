import { Component } from '@angular/core';

@Component({
  selector: 'app-points-distance',
  templateUrl: './points-distance.component.html',
  styleUrls: ['./points-distance.component.css']
})
export class PointsDistanceComponent
{
  x1!:number;
  x2!:number;
  y1!:number;
  y2!:number;
  result:number = 0;

  calculate = () : void =>
  {
    if(this.x1 == null || this.x2 == null || this.y1 == null || this.y2 == null)
    {
      this.result = 0
    }
    this.result = Math.sqrt((this.x2 - this.x1) * (this.x2 - this.x1) + (this.y2 - this.y1) * (this.y2 - this.y1))
  };

}
