import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PiChartComponent, AlertMessagesExampleDialog, MapExampleDialog } from './pi-chart/pi-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { Service1Service } from './service1.service';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'main',
    component: PiChartComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PiChartComponent,
    AlertMessagesExampleDialog,
    MapExampleDialog,
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,
      { enableTracing: true }),
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAYT9iprOcu1NzFBMOMpQcPUX3Q3SajKf4',
    libraries: ['places'] 
  }) 
  ],
  providers: [Service1Service],
  entryComponents: [
    AlertMessagesExampleDialog, MapExampleDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
