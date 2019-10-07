import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarStore} from '../../car.model';
import {Store} from '@ngrx/store';
import {DeleteCar, UpdateCar} from '../../redux/cars.action';
import {AppState} from '../../redux/app.state';
import {CarStoreService} from '../../car-store.service';

@Component({
  selector: 'app-car-store',
  templateUrl: './car-store.component.html',
  styleUrls: ['./car-store.component.scss']
})
export class CarStoreComponent implements OnInit {

  @Input() car: CarStore

  @Output() deleteCar = new EventEmitter()

  constructor(
    public store: Store<AppState>,
    private carStoreService: CarStoreService
  ) { }

  ngOnInit() {
  }

  onBuy() {
    // this.car.isSold = true;
    // this.store.dispatch(new UpdateCar(this.car))

    //server
    this.car.isSold = true;
    this.carStoreService.updateCar(this.car)
  }

  onDelete() {
    // this.deleteCar.emit(this.car)
    // this.store.dispatch(new DeleteCar(this.car))

    //server
    this.carStoreService.deleteCar(this.car)
  }

}
