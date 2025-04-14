import './App.css'
import CustomHook from './Components/CustomHook/CustomHook'
import CustomHook2 from './Components/CustomHook/CustomHook2'
import FormsMaster from './Components/FormsMaster/FormsMaster'
import FormsMaster2 from './Components/FormsMaster2/FormsMaster2'
import Grandpa from './Components/Grandpa/Grandpa'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
function App() {
  const handleSignUpData = data =>
    {
        console.log(data);
    }
  const handleProfileData = dataValues =>
      {
          console.log(dataValues)
      }
  return (
    <>
      <h1 className='text-5xl  bg-red-500 text-center text-white py-2'>Form Master</h1>
      <FormsMaster></FormsMaster>
      <FormsMaster2></FormsMaster2>
      <RefForm></RefForm>
      <CustomHook></CustomHook>
      <CustomHook2></CustomHook2> 
      <ReusableForm 
        formTitle={'Sign Up: '}
        handleData={handleSignUpData}>
          <div>
              <h2>Sign Up:</h2>
              <p>Please Sign Up Here:</p>
          </div>
      </ReusableForm>
      <ReusableForm 
        formTitle={'Profile: '} 
        submitBtn = {"Update"}
        handleData={handleProfileData}>
          <div>
              <h2>Profile</h2>
              <p>Please Update Your Profile</p>
          </div>
      </ReusableForm>
      <Grandpa></Grandpa>
    </>
  )
}
export default App
