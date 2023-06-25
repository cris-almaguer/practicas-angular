import { ResistanceModule } from './resistances/resistance/resistance.module';
import { DistanceModuleModule } from './points-distance/distance-module/distance-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DistanceModuleModule,
    ResistanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
