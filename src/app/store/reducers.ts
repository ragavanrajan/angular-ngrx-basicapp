// counter.reducer.ts
import { CounterActionTypes, CounterActions } from './actions';

export interface State { }

export function counterReducer(state: number = 0, action: CounterActions): State {

  switch (action.type) {
    case CounterActionTypes.INCREMENT: {
      return state + 1;
    }
    // adding decrement case 
    case CounterActionTypes.DECREMENT: { 
      return state -1; 
    }

// adding reset case 

  case CounterActionTypes.RESET: { 
      return action.payload; //typed to number 
    }

    default: {
      return state;
    }
  }
}