import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";

// root-reducer
const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action);
    if(!action.type) {
        return next(action);
    }
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());
    
    next(action);
    console.log('next state: ', store.getState());
}
const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
