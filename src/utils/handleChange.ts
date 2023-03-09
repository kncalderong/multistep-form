import { FormInput } from './../pages/form/PersonalInfo';

const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setFunction: React.SetStateAction<any>) => {
  setFunction((prevState: FormInput) => {
    return {
      alertMessage:'This field is required', //to restore default value
      showAlert: false, //to restore default value
      value: event.target.value // this is the value to change
    }
  })
}

export default handleChange