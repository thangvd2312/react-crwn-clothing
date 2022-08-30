import USER_ACTION_TYPE from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
