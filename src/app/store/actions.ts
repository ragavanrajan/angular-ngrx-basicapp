// counter.actions.ts
import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
  RESET = '[Counter] Reset'
}
export class Increment implements Action {
  readonly type = CounterActionTypes.INCREMENT;
}

// adding decrement 
export class Decrement implements Action {
  readonly type = CounterActionTypes.DECREMENT;
}

//adding reset
export class Reset implements Action {
  readonly type = CounterActionTypes.RESET;
  // For reset 
    constructor(public payload: number) {}
}



export type CounterActions
  = Increment
  | Decrement
  | Reset;
