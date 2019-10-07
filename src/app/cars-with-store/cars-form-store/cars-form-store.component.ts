import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car, CarStore} from '../../car.model';
import * as moment from 'moment';
import {AppState} from '../../redux/app.state';
import {Store} from '@ngrx/store';
import {AddCar} from '../../redux/cars.action';
import {CarStoreService} from '../../car-store.service';

@Component({
  selector: 'app-cars-form-store',
  templateUrl: './cars-form-store.component.html',
  styleUrls: ['./cars-form-store.component.scss']
})
export class CarsFormStoreComponent implements OnInit {

  // private id: number = 2; // у нас 2 машины, comments, cause we have json server

  carStoreName = '';
  carStoreModel = '';

  // @Output() addCar = new EventEmitter()

  constructor(
    private store: Store<AppState>,
    private carStoreService: CarStoreService
  ) { }

  ngOnInit() {
  }

  onAdd() {
    if (this.carStoreName === '' || this.carStoreModel === '') return

    // this.id = ++this.id

    // const car = new CarStore(
    //   this.carStoreName,
    //   this.carStoreModel,
    //   moment().format('DD.MM.YY'),
    //   false,
    //   this.id
    // )
    const date = moment().format('DD.MM.YY')
    const car = new CarStore(this.carStoreName, this.carStoreModel, date)

    // this.addCar.emit(car)
    // this.store.dispatch(new AddCar(car))

    //server
    this.carStoreService.addCar(car)

    this.carStoreModel = '';
    this.carStoreName = '';
  }

  onLoad() {
    this.carStoreService.loadCars()
  }
}
