export enum ReducerActionKind {
  FINISH_FORM = 'FINISH_FORM'
}

type ReducerAction<T, P> = {
  type: T,
  payload: P
}
  
export type ReducerActionsType = 
  | ReducerAction<ReducerActionKind.FINISH_FORM, {isFinished: boolean}>