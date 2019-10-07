import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CarsComponent} from './cars/cars.component';
import {CarPageComponent} from './car-page/car-page.component';
import {AboutComponent} from './about/about.component';
import {CarsWithStoreComponent} from './cars-with-store/cars-with-store.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'cars', component: CarsComponent
  },
  {path: 'cars/:id/:name', component: CarPageComponent},
  {path: 'about', component: CarsWithStoreComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
