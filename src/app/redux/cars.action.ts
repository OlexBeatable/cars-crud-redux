import {Action} from '@ngrx/store';
import {CarStore} from '../car.model';

export namespace CAR_ACTION {
  // специальные константы, которые определяют действие нашего приложения
  export const ADD_CAR = 'ADD_CAR';
  export const DELETE_CAR = 'DELETE_CAR';
  export const UPDATE_CAR = 'UPDATE_CAR';
  export const LOAD_CARS = 'LOAD_CARS';
}
export class AddCar implements Action {
  readonly type = CAR_ACTION.ADD_CAR;

  // наш обьект машины
  constructor(public payload: CarStore) {}
}

export class DeleteCar implements  Action {
  readonly type = CAR_ACTION.DELETE_CAR;

  // наш обьект машины
  constructor(public payload: CarStore) {}
}

export class UpdateCar implements Action {
  readonly type = CAR_ACTION.UPDATE_CAR;

  constructor(public payload: CarStore) {}
}

export class LoadCars implements Action {
  readonly type = CAR_ACTION.LOAD_CARS;

  constructor(public payload: CarStore[]) {}
}

export type CarsAction = AddCar | DeleteCar | UpdateCar | LoadCars
