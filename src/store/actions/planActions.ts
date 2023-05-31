import { Dispatch } from "redux";
import { SET_PLAN } from "../actionTypes";

interface SetPlanAction {
  type: typeof SET_PLAN;
  payload: IPlan | null;
}

export const SetPlan = (plan: IPlan | null) => async (
  dispatch: Dispatch<SetPlanAction>
) => {
  dispatch({
    type: SET_PLAN,
    payload: plan,
  });
};

export type PlanActionTypes = SetPlanAction;
