import { useAppContext } from '../../context/appContext'
const PersonalInfo = () => {
  
  const { name, handleChangeForm } = useAppContext()
  return (
    <form>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={ name} name='name' onChange={handleChangeForm}/>
      </div>
    </form>
  )
}

export default PersonalInfo
