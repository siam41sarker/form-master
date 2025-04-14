import { useEffect, useRef, useState } from "react";
const ReusableForm = ({submitBtn="Submit",handleData,children}) => {
    const [error,setError] = useState('');
    const emailRef = useRef();
    useEffect(()=>
            {
                emailRef.current.focus();
            },[])
    const handleSubmit = e =>
        {
            e.preventDefault();
            e.target.password.value.length<6?setError('Password can not be less than 6 characters!'):setError('')+handleData(
                {
                    Name:e.target.name.value,
                    Email:e.target.email.value,
                    Password:e.target.password.value
                }
            )
        }
    return (
    <div>
      <div className="w-[300px] mx-auto">
        <p>Here is: </p>
        <form onSubmit={handleSubmit} className="bg-blue-400 shadow-xl p-4 rounded-xl mt-10">
            {children}
          <input
            className="border border-solid border-black mb-5 mt-5 rounded-xl py-2"
            type="text"
            name="name"
          />
          <br />
          <input
            ref={emailRef}
            className="border border-solid border-black mb-5 rounded-xl py-2"
            type="email"
            name="email"
          />
          <br />
          <input
            className="border border-solid border-black mb-5 rounded-xl py-2"
            type="password"
            name="password"
          />
          <br />
          {error&&<p>{error}</p>}
          <input
            className="border border-solid border-purple-600 mb-5 py-2 px-5 rounded-xl bg-purple-400 hover:bg-purple-900 text-white hover:font-bold cursor-pointer"
            type="submit"
            value={submitBtn}
          />
        </form>
      </div>
    </div>
  );
};

export default ReusableForm;
