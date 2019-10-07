import {CarStore} from '../car.model';

export interface AppState {
  // это поле зарегистрировано в app.module.ts
  carPageStore: {
    cars: CarStore[]
  }
}
