import { useEffect, useRef, useState } from "react";
import { useInputHook } from "../../Hook/useInputHook";
const CustomHook = () => {
    const [name,setName] = useInputHook();
    const [email,setEmail] = useInputHook();
    const [pass,setPass] = useInputHook();
    const [error,setError] = useState('');
    const emailRef = useRef();
    useEffect(()=>
        {
            emailRef.current.focus();
        },[])
    const handleSubmit = e=>
        {
            e.preventDefault();
            pass.length<6 ? setError("Password can't be less than six characters!"):setError('')+ console.log("Name: "+name)+console.log("Email: "+email)+console.log("Password: "+pass);
        }

  return (
    <div>
      <div className="w-[300px] mx-auto">
        <form
            onSubmit={handleSubmit}
          className="bg-blue-400 shadow-xl p-4 rounded-xl mt-10"
        >
          Name: <br />
          <input 
            value={name}
            onChange={setName}
            className="border border-solid border-black mb-5  rounded-xl p-2"
            type="text"
            name="name"
          />
          <br />
          Email: <br />
          <input
            ref={emailRef}
            onChange={setEmail}
            className="border border-solid border-black mb-5 rounded-xl p-2"
            type="email"
            name="email"
            required
          />
          <br />
          Password: <br />
          <input
            onChange={setPass}
            className="mb-5 p-2 border border-solid border-black rounded-xl"
            type="password"
            name="password"
            required
          />
          <br />
          {error&&<p>{error}</p>}
          <input
            className="border border-solid border-purple-600 mb-5 mt-2 py-2 px-5 rounded-xl bg-purple-400 hover:bg-purple-900 text-white hover:font-bold cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CustomHook;
