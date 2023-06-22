import { DistanceModuleModule } from './points-distance/distance-module/distance-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PointsDistanceComponent } from './points-distance/points-distance.component';
import { ResistancesComponent } from './resistances/resistances.component';

@NgModule({
  declarations: [
    AppComponent,
    ResistancesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DistanceModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
