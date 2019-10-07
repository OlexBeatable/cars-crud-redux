import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CarsService} from '../cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {

  id: number;
  name: string;
  color: string;
  hash: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarsService) { }

  ngOnInit() {
    // получаем 1 раз данные из адресной строки
    this.id = +this.route.snapshot.params.id;
    // // this.id = this.route.snapshot.params.['id'];
    this.name = this.route.snapshot.params.name;

    // будет браться из роутов, которые мы передали в cars.html [queryParams]="{color: car.color}" [fragment]="pic"
    this.color = this.route.snapshot.queryParams.color;
    console.log(this.route.snapshot);
    this.hash = this.route.snapshot.fragment;

    // динамически
    // слушаем изменения относительно роута
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params.id;
        this.name = params.name;
      });

    // динамически queryParams
    this.route.queryParams
      .subscribe((params: Params) => {
        this.color = params.color;
      });
  }

  mazdaOpen() {
    this.router.navigate(['./cars', 12, 'Mazda'], {
      queryParams: {
        color: 'black',
        year: 1995
      },
      fragment: 'new'
    });
  }

  locationBack() {
   this.router.navigate(['/cars'])
  }

}
