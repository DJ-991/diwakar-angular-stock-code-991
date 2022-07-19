import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Http-Client Module
import { HttpClientModule } from '@angular/common/http';

import { StockCardComponent } from './components/stock-card/stock-card.component';
// Routing Module
import { AppRoutingModule } from './app-routing.module';

import { StockTrackerComponent } from './components/stock-tracker/stock-tracker.component';
import { StockSentimentComponent } from './components/stock-sentiment/stock-sentiment.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    StockCardComponent,
    StockTrackerComponent,
    StockSentimentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
