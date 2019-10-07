import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditCarComponent } from './edit-car/edit-car.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CarPageComponent } from './car-page/car-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ActionStatusComponent } from './action-status/action-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { StoreModule } from '@ngrx/store';
import { CarsWithStoreComponent } from './cars-with-store/cars-with-store.component';
import { CarStoreComponent } from './cars-with-store/car-store/car-store.component';
import { CarsFormStoreComponent } from './cars-with-store/cars-form-store/cars-form-store.component';
import {carsReducer} from './redux/cars.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CarsEffect} from './redux/cars.effect';

@NgModule({
  declarations: [
    AppComponent,
    EditCarComponent,
    CarsComponent,
    HomeComponent,
    CarPageComponent,
    NavigationComponent,
    ActionStatusComponent,
    AboutComponent,
    CarsWithStoreComponent,
    CarStoreComponent,
    CarsFormStoreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // регистрируем эффекты
    EffectsModule.forRoot([CarsEffect]),
    // регистрируем редьюсеры
    StoreModule.forRoot({carPageStore: carsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
