import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http: HttpClient
  ) { }

  getTitle() {
    return this.http.get('http://localhost:3000/title');
  }

  getCars() {
    // const headers = new Headers({
    //   'Content-type': 'application/json; charset=utf-8'
    // });
    return this.http.get('http://localhost:3000/cars');
  }

  addCar(data): Observable<any> {
    return this.http.post('http://localhost:3000/cars', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }

  editCar(car: any) {
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
