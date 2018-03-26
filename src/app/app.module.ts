import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // for time-travel debugging- install the npm dependecy 

@NgModule({
  imports: [BrowserModule, FormsModule,
    StoreModule.forRoot({ counter: counterReducer }), //import the reducers and use the storemodule.root function to register the state container within ur application 
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


