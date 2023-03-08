import { AppContextStateType } from './AppState.type';

export interface AppContextValueType extends AppContextStateType {
  updateForm: () => void
}

