import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppState} from './redux/app.state';
import {Store} from '@ngrx/store';
import {CarStore} from './car.model';
import {AddCar, DeleteCar, LoadCars, UpdateCar} from './redux/cars.action';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarStoreService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  // сервис для эффектов
  preloadCars(): Observable<CarStore[]> {
    return this.http.get<CarStore[]>(this.BASE_URL + '/cars')
  }

  loadCars(): void {
    // this.http.get(`${this.BASE_URL}/cars`)
    this.preloadCars()
      .toPromise()
      .then((cars: CarStore[]) => {
        this.store.dispatch(new LoadCars(cars))
      })
  }

  addCar(car: CarStore) {
    this.http.post(`${this.BASE_URL}/cars`, car)
      .toPromise()
      .then((car: CarStore) => {
        this.store.dispatch(new AddCar(car))
      })
  }

  deleteCar(car: CarStore) {
    this.http.delete(this.BASE_URL + '/cars/' + car.id)
      .toPromise()
      .then(_=> {
        this.store.dispatch(new DeleteCar(car))
      })
  }

  updateCar(car: CarStore) {
    this.http.put(this.BASE_URL + '/cars/' + car.id, car)
      .toPromise()
      .then((car: CarStore) => {
        this.store.dispatch(new UpdateCar(car))
      })
  }
}
