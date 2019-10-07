import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AddCar, CAR_ACTION} from './cars.action';
import {mergeMap, switchMap} from 'rxjs/operators';
import {CarStore} from '../car.model';
import {CarStoreService} from '../car-store.service';

@Injectable()
export class CarsEffect {

  constructor(
    private actions$: Actions,
    private carStoreService: CarStoreService
  ) {}

  @Effect() loadCars = this.actions$.pipe(
    // типа action, который дисптчится
    ofType(CAR_ACTION.ADD_CAR),
    // надо загрузить машины, надо вернуть стрим
    switchMap((action: AddCar) => {
      // observable, который содержит список машин
      // переключаемся на другой стрим
      return this.carStoreService.preloadCars()
    }),
    mergeMap((cars: CarStore[]) => {
      // диспатчим новый action
      return [
        {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        }
      ]
    })
  )

}
