import {CAR_ACTION, CarsAction} from './cars.action';

const initialState = {
  // new CarStore('ford', 'blue', '01.31.2018', false, 1),
  // new CarStore('audi', 'orange', '01.31.2018', false, 2)
  cars: []
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {

    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        // расширенный обьект cars - Redux поймет, что нам нужно обновить View
        cars: [...state.cars, action.payload]
      };
    // case <any>CAR_ACTION.DELETE_CAR:
    //   return state;
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };
    case CAR_ACTION.UPDATE_CAR:
      // const idx = state.cars.findIndex(c => c.id === action.payload.id)
      // state.cars[idx].isSold = false
      return {
        ...state,
        cars: [...state.cars]
      };
    case CAR_ACTION.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      };
    default:
      return state;
  }
}
