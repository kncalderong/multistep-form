export type AppContextValueType = {
  isFinished: boolean,
  name: string,
  updateForm: () => void,
  handleChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void
}

