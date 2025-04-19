import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreLoadReducer from "./isPreload/reducer";
import usersReducer from "./users/reducer";
import talksReducer from "./talks/reducer";
import talkDetailReducer from "./talkDetail/reducer";

/**
 * @TODO: Create Redux store
 */
const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreLoad: isPreLoadReducer,
    users: usersReducer,
    talks: talksReducer,
    talkDetail: talkDetailReducer,
  },
});

export default store;
