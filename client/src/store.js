import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { dayCreateReducer, dayListReducer, dayUpdateReducer } from './reducers/daysReducers';
import { yearCreateReducer, yearUpdateReducer, yearListReducer } from './reducers/yearsReducers';
import { weeksCreateReducer, weekListReducer, weekUpdateReducer } from './reducers/weekReducers';

const reducer = combineReducers({
  yearList: yearListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  dayList: dayListReducer,
  dayCreate: dayCreateReducer,
  dayUpdate: dayUpdateReducer,
  yearCreate: yearCreateReducer,
  yearUpdate: yearUpdateReducer,
  weekCreate: weeksCreateReducer,
  weekList: weekListReducer,
  weekUpdate: weekUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem("userInfo"))
: null ;


const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
