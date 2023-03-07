
import { ReducerActionKind, ReducerActionsType, AppContextStateType } from '../types';

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