import { Component } from '@angular/core';

// Add the following modules to inject the Store service into your components and services. Use select operator to select slice(s) of state
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from './store/actions';

interface AppState {
  counter: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
 counter: Observable<number>; // add the count as Observable here 

//define it in constructor 
  constructor(private store: Store<AppState>) {
    this.counter = store.pipe(select('counter'));
  }

//function to increment the number
  increment(){
    this.store.dispatch(new Counter.Increment());
  }
//function to decrement the number 
decrement() { 
  this.store.dispatch(new Counter.Decrement());
}
// function to reset the counter 
reset(){
    this.store.dispatch(new Counter.Reset(0));
  }


}
