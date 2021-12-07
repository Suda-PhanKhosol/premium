import { combineReducers } from "redux";
// import {all} from "redux-saga/effects";

import * as auth from "../app/modules/_auth/_redux/authRedux";
import * as layout from "../app/layout/_redux/layoutRedux";
import * as demo from "../app/modules/_demo/_redux/demoRedux";
import * as title from "../app/modules/Title/titleRedux";
import * as employee from '../app/modules/Employee/employeeRedux';
import * as customerPayment from '../app/modules/PremiumOperation/_redux/customerPaymentRedux';
import * as debtRenewal from '../app/modules/DebtRenewalManagement/_redux/debtRenewalRedux'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  layout: layout.reducer,
  demo: demo.reducer,
  title: title.reducer,
  employee: employee.reducer,
  customerPayment: customerPayment.reducer,
  debtRenewal : debtRenewal.reducer
});

export function* rootSaga() {
  // yield all([demo.saga()]);
}
