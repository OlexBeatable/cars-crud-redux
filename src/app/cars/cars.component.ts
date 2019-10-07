import {Component, Input, OnInit, Output} from '@angular/core';
import {CarsService} from '../cars.service';
import {Car} from '../car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];

  carName = '';
  carColor = '';
  carImage = '';
  carPrice = '';
  carSelected = {
    id: '',
    name: '',
    color: '',
    image: '',
    price: ''
  };
  modalFlag = false;
  currentTitle = '';
  isSold = false;

  @Input() actionStatusMessage;
  @Output() statusMessage;

  constructor(
    private carsService: CarsService
  ) {}

  ngOnInit() {
    this.carsService.getTitle()
      .subscribe(success => {
        this.currentTitle = success[0].value;
      });

    // this.loadCars()
    this.carsService.getCars()
      .subscribe((response: Car[]) => {
        this.cars = response;
      });
  }

  loadCars() {
    this.carsService.getCars()
      .subscribe((response: Car[]) => {
        this.cars = response;
      });
  }

  addCar() {
    const data = {
      name: this.carName,
      color: this.carColor,
      image: this.carImage,
      price: this.carPrice
    };
    if (this.carName === '') {
      alert(`Enter the fields ${this.carName}`);
      return;
    } else {
      this.carsService.addCar(data)
        .subscribe((car: Car) => {
          this.cars.push(car);
        });
      this.carName = '';
      this.carColor = '';
      this.carImage = '';
      this.carPrice = '';

      this.actionStatusMessage = true;
      this.statusMessage = 'Added car';
    }
  }

  deleteCar(car: Car) {
    this.carsService.deleteCar(car)
      .subscribe(() => {
        this.loadCars();

        this.actionStatusMessage = true;
        this.statusMessage = 'Deleted car';
      });
  }

  editCar(car: Car) {
    this.modalFlag = true;
    this.carSelected.id = car.id;
    this.carSelected.name = car.name;
    this.carSelected.color = car.color;
    this.carSelected.image = car.image;
    this.carSelected.price = car.price;
  }

  newUpdateCar(data) {
    this.carsService.editCar(data)
      .subscribe(() => {
        this.modalFlag = false;
        this.loadCars();

        this.actionStatusMessage = true;
        this.statusMessage = 'Edited car';
      });
  }

  buyCar() {
    this.isSold = true;
  }

  cancelUpdateCar() {
    this.modalFlag = false;
  }

  closeAlertStatus(data) {
    this.actionStatusMessage = data;
  }

}
