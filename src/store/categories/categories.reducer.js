import CATEGORIES_ACTION_TYPE from './categories.types';
const INITAL_STATE = {
    categoriesMap: {}
}

export const categoriesReducer = (state = INITAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
        return {
            ...state,
            categoriesMap: payload
        };
        default:
            return state;
    }
}