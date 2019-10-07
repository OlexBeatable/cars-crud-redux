export class Car {
  constructor(
    public name: string,
    public color: string,
    public price: string,
    public image: string,
    public date?: string,
    public isSold?: boolean,
    public id?: string
  ) {}
}

export class CarStore {
  constructor(
    public name: string,
    public model: string,
    public date?: string,
    public isSold?: boolean,
    public id?: number
  ) {}
}

export interface Cars {
  cars: Car[],
  carsStore: CarStore[]
}
