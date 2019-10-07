import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  @Input() carSelected;
  @Input() closeModal;
  @Output() carChange = new EventEmitter();
  @Output() modalClose = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  updateCar() {
    this.carChange.emit(this.carSelected);
  }

  closeCarCard() {
    this.modalClose.emit(this.closeModal);
  }

}
