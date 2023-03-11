export enum ReducerActionKind {
  UPDATE_FORM = 'UPDATE_FORM',
  RESET_STATE = 'RESET_STATE',
}

type ReducerAction<T, P> = {
  type: T,
  payload: P
}
  
export type ReducerActionsType = 
  | ReducerAction<ReducerActionKind.UPDATE_FORM, { key: string, value: any }>
  | ReducerAction<ReducerActionKind.RESET_STATE, {}>