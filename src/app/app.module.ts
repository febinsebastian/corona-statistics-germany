import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { HttpClientModule } from '@angular/common/http';
import { WeekStatisticsComponent } from './week-statistics/week-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent,
    WeekStatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatToolbarModule,
    MatSidenavModule
    
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
