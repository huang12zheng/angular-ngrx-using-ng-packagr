import { Component } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
export const getProductState = createFeatureSelector<any>('products');
