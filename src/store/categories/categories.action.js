import CATEGORIES_ACTION_TYPE from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';
export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);
