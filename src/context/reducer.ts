
import { ReducerActionKind, ReducerActionsType, AppContextStateType } from '../types';

const reducer = (state:  AppContextStateType, action: ReducerActionsType): AppContextStateType => {

  if (action.type === ReducerActionKind.FINISH_FORM) {
    return {
      ...state,
      isFinished: action.payload.isFinished
    }
  }
  throw new Error(`no such action : ${action}`);

}

export default reducer