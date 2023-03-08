const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setFunction: React.SetStateAction<any> ) => {
  setFunction(event.target.value)
}

export default handleChange