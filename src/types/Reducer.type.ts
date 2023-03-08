export enum ReducerActionKind {
  FINISH_FORM = 'FINISH_FORM',
  HANDLE_CHANGE_FORM = 'HANDLE_CHANGE_FORM'
}

type ReducerAction<T, P> = {
  type: T,
  payload: P
}
  
export type ReducerActionsType = 
  | ReducerAction<ReducerActionKind.FINISH_FORM, { isFinished: boolean }>
  | ReducerAction<ReducerActionKind.HANDLE_CHANGE_FORM, {name: string, value: string}>