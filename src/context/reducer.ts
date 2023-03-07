import { ReducerActionKind } from '../types/ReducerActionKind';
import { AppContextStateType, ReducerPayloadType } from './../types';
import { initialState } from "./appContext";


type ReducerAction<T, P> = {
  type: T,
  payload: P
}
  
type ReducerActionsType = 
  | ReducerAction<ReducerActionKind.FINISH_FORM, {isFinished: boolean}>


const reducer = (state:  AppContextStateType, action: ReducerActionsType): AppContextStateType => {

  if (action.type === ReducerActionKind.FINISH_FORM) {
    console.log('action.payload: ', action.payload);
    
    return {
      ...state,
      isFinished: action.payload.isFinished
    }
  }
  
  throw new Error(`no such action : ${action.type}`);

}

export default reducer