import { PlanState, IPlan } from "../../type";
import { PlanActionTypes } from "../actions/planActions";

import * as actionTypes from "../actionTypes";

const initialState: PlanState = {
    state: null,
  };

const planReducer = (
  state: PlanState = initialState,
  action: PlanActionTypes
): PlanState => {
  switch (action.type) {
    case actionTypes.SET_PLAN:
      const account: IPlan|null = action.payload;
      return {
        ...state,
        state: account,
      };
  }
  return state;
};

export default planReducer;
