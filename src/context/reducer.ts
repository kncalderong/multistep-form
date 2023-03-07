import { ReducerActionKind } from '../types/ReducerActions';
import { AppContextStateType, ReducerPayloadType } from './../types';
import { initialState } from "./appContext";


interface reducerAction {
  type: ReducerActionKind
  payload?: ReducerPayloadType
}

const reducer = (state:  AppContextStateType, action: reducerAction): AppContextStateType => {
  console.log(state);
  console.log(action);
  if (action.type === ReducerActionKind.FINISH_FORM) {
    return {
      ...state,
      isFinished: true
    }
  }
  
  throw new Error(`no such action : ${action.type}`);

}

export default reducer