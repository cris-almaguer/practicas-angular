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
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
