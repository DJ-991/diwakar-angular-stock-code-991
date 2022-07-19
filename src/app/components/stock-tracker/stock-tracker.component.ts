import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LOCAL_STORE_KEY } from '../../static/stock.constants';

@Component({
  styleUrls: ['./stock-tracker.component.css'],
  templateUrl: './stock-tracker.component.html',
})
export class StockTrackerComponent implements OnDestroy {
  private readonly formValChange$: Subscription;
  readonly activeStocks: string[] = JSON.parse(
    localStorage.getItem(LOCAL_STORE_KEY) || '[]'
  );
  readonly formGroup = new FormGroup({
    stockCode: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(5),
    ]),
  });

  get fc() {
    return this.formGroup.get('stockCode');
  }

  constructor() {
    this.formValChange$ = this.fc.valueChanges.subscribe((val) => {
      if (!val) return;
      const updated = val.trim().toUpperCase();
      if (val !== updated) {
        this.fc.setValue(updated);
        this.fc.updateValueAndValidity();
      }
    });
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      console.log('Invalid', '"' + this.fc.value + '"');
      return;
    }
    const stockName = this.fc.value;
    if (this.activeStocks.indexOf(stockName) > -1) {
      this.fc.reset();
      return;
    }
    this.activeStocks.unshift(stockName);
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(this.activeStocks));
    this.formGroup.reset();
  }

  ngOnDestroy() {
    this.formValChange$.unsubscribe();
  }

  removeStock(id: number) {
    this.activeStocks.splice(id, 1);
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(this.activeStocks));
  }
}
