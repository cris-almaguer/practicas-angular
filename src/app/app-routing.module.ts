import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { ResistancesComponent } from './resistances/resistances.component';
import { PointsDistanceComponent } from './points-distance/points-distance.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes:Routes =
[
  {
    path: '',
    redirectTo: 'CinepolisComponent',
    pathMatch: 'full'
  },
  {
    path: 'CinepolisComponent',
    component: CinepolisComponent
  },
  {
    path: 'PointsDistanceComponent',
    component: PointsDistanceComponent
  },
  {
    path: 'ResistancesComponent',
    component: ResistancesComponent
  },
  {
    path: 'PizzeriaComponent',
    component: PizzeriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
