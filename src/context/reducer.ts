
import { ReducerActionKind, ReducerActionsType, AppContextStateType } from '../types';

const reducer = (state:  AppContextStateType, action: ReducerActionsType): AppContextStateType => {

  if (action.type === ReducerActionKind.UPDATE_FORM) {
    return {
      ...state,
      [action.payload.key]: action.payload.value
    }
  }
  throw new Error(`no such action : ${action}`);

}

export default reducer