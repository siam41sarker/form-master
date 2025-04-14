import { useState } from "react";
const FormsMaster2 = () => {
    const [error,setError] = useState('');
    const [name,setName] = useState("Siam");
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const handleSubmit = e =>
      {
          e.preventDefault();
          password.length<6 ? setError("Password can't be less than 6 characters!") : 
             setError('') + console.log(name,email,password)
      }
    const handleNameChange = e =>
        {
            setName(e.target.value);
        }
    const handleEmailChange = e =>
        {
                setEmail(e.target.value);
        }
    const handlePasswordChange = e =>
        {
                setPassword(e.target.value);
        }
  return (
    <div>
      <div className="w-[300px] mx-auto">
        <form onSubmit={handleSubmit} className="bg-blue-400 shadow-xl p-4 rounded-xl mt-10">
            Name: <br />
          <input value={name}
            onChange={handleNameChange}
            className="border border-solid border-black mb-5  rounded-xl p-2"
            type="text"
            name="name"
          />
          <br />
          Email: <br />
          <input
            onChangeCapture={handleEmailChange}
            className="border border-solid border-black mb-5 rounded-xl p-2"
            type="email"
            name="email"
            required
          />
          <br />
          Password: <br />
          <input onChange={handlePasswordChange} className="mb-5 p-2 border border-solid border-black rounded-xl" type="password" name="password" required/> <br />
          {error && <p>{error}</p>}
          <input
            className="border border-solid border-purple-600 mb-5 mt-2 py-2 px-5 rounded-xl bg-purple-400 hover:bg-purple-900 text-white hover:font-bold cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}
export default FormsMaster2;
