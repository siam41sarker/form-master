import { useEffect, useRef, useState } from "react";
import { useInputState } from "../../Hook/useInputHook";
const CustomHook2 = () => {
    const values = useInputState();
    const emails = useInputState('');
    const passwords = useInputState('');
    const [error,setError] = useState('');
    const emailRef = useRef();
    useEffect(()=>
            {
                emailRef.current.focus();
            },[])
    const handleControl = e =>
        {
            e.preventDefault();
            passwords.measure.length<6?setError("Password can't be less then 6 characters!"):setError('')+console.log("Name: "+values.measure)+console.log("Email: "+emails.measure)+console.log("Password: "+passwords.measure);

        }
  return (
    <div>
      <div className="w-[300px] mx-auto">
        <form onSubmit={handleControl} className="bg-blue-400 shadow-xl p-4 rounded-xl mt-10">
          <input
            value={values.measure}
            className="border border-solid border-black mb-5 mt-5 rounded-xl p-2"
            type="text"
            name="name"
            {...values}
          />
          <br />
          <input
            className="border border-solid border-black mb-5 rounded-xl p-2"
            type="email"
            name="email"
            {...emails}
            ref={emailRef}
          />
          {error&&<p>{error}</p>}
          <br />
          <input
            className="border border-solid border-black mb-5 rounded-xl p-2"
            type="password"
            name="password"
            {...passwords}
          />
          <br />
          <input
            className="border border-solid border-purple-600 mb-5 py-2 px-5 rounded-xl bg-purple-400 hover:bg-purple-900 text-white hover:font-bold cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CustomHook2;
