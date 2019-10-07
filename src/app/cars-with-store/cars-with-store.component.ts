import { Component, OnInit } from '@angular/core';
import {Car, Cars, CarStore} from '../car.model';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cars-with-store',
  templateUrl: './cars-with-store.component.html',
  styleUrls: ['./cars-with-store.component.scss']
})
export class CarsWithStoreComponent implements OnInit {

  // public cars: CarStore[] = []
  public carState: Observable<AppState>

  constructor(private store: Store<Cars>) {}

  ngOnInit() {
    // 1 способ
    // выбираем машины
    // this.store.select('carPageStore')
    //   .subscribe(data => {
    //     this.cars = data.cars
    //   })

    // 2 способ
    this.carState = this.store.select('carPageStore')
  }

  // onAdd(car: CarStore) {
  //   this.cars.push(car)
  // }

  // onDelete(car: CarStore) {
  //   this.cars = this.cars.filter(c => c.id !== car.id)
  // }

}
