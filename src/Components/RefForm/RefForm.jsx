import {useEffect, useRef, useState } from "react";
const RefForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const [error,setError] = useState('');
    useEffect(()=>
            {
                nameRef.current.focus();
            },[])
    const handleSubmit = e =>
        {
            e.preventDefault();
            
            const password = passRef.current.value;
            password.length<6 ? setError("Password can't be less than six!") : setError('')+console.log("Name: "+nameRef.current.value)+
            console.log("Email: "+emailRef.current.value)+console.log("Password: "+password);

        }
  return (
    <div>
      <div className="w-[300px] mx-auto">
        <form onSubmit={handleSubmit} className="bg-blue-400 shadow-xl p-4 rounded-xl mt-10">
          Name: <br />
          <input
            ref={nameRef}
            className="border border-solid border-black mb-5  rounded-xl p-2"
            type="text"
            name="name"
          />
          <br />
          Email: <br />
          <input
            ref={emailRef}
            defaultValue= {"siamsarker189@gmail.com"}
            className="border border-solid border-black mb-5 rounded-xl p-2"
            type="email"
            name="email"
            required
          />
          <br />
          Password: <br />
          <input
           ref={passRef}
            className="mb-5 p-2 border border-solid border-black rounded-xl"
            type="password"
            name="password"
            required
          />
          {error&&<p>{error}</p>}
          <br />
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
export default RefForm;
