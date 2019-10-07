import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action-status',
  templateUrl: './action-status.component.html',
  styleUrls: ['./action-status.component.scss']
})
export class ActionStatusComponent implements OnInit {

  @Output()
  actionStatusMessage = true;
  @Output()
  closeAlert = new EventEmitter();

  @Input()
  statusMessage;

  constructor() { }

  ngOnInit() {}

  onCloseAlert() {
    this.closeAlert.emit(false);
  }

}
