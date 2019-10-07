import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('carsAnimationTrigger', [
      /*start state name*/
      state('start', style({
        backgroundColor: '#fff',
        width: '100%'
      })),
      state('middle', style({
        backgroundColor: 'orange',
      })),
      state('end', style({
        backgroundColor: 'lightblue',
      })),
      /*order + time*/
      transition('start => middle', animate(1000)),
      transition('middle => end', animate('3000ms 2s ease-out'))
    ]),
    trigger('multi', [
      state('start', style({
        width: '150px',
        height: '150px',
        border: '8px solid #000',
        borderRadius: '50%'
      })),
      state('end', style({
        width: '150px',
        height: '150px',
        border: '8px solid #eee',
        borderRadius: '50%'
      })),
      transition('start <=> end', [
        style({
          background: 'red'
        }),
        animate(1000, style({
          background: 'lightgreen'
        })),
        animate(1000, style({
          background: 'orange'
        })),
        animate(1000)
      ])
      // transition('start <=> end', animate(500))
    ])
  ]
})
export class NavigationComponent implements OnInit {

  carsAnimationTriggerState = 'start';
  multiState = 'start';

  constructor() { }

  ngOnInit() {

    this.carsAnimationTriggerState = 'start';
    setTimeout(() => {
      this.carsAnimationTriggerState = 'middle';
    }, 1000);
    setTimeout(() => {
      this.carsAnimationTriggerState = 'end';
    }, 2000);
  }

}
