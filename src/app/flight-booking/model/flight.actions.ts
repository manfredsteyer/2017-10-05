
import { Action } from '@ngrx/store';
import { Flight } from '../../entities/flight';

export const FLIGHTS_LOADED_ACTION = 'FLIGHTS_LOADED_ACTION';

export class FlightsLoadedAction implements Action {
  readonly type = FLIGHTS_LOADED_ACTION;
  constructor(readonly payload: Flight[]) {
  }
}
