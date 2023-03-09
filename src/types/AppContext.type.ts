import { AppContextStateType } from './AppState.type';

export interface AppContextValueType extends AppContextStateType {
  updateInfo: (key: string, value: any) => void
}

