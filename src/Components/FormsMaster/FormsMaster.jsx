const FormsMaster = () => {
  const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log("Name: "+e.target.name.value);
        console.log("Email: "+e.target.email.value);
    };
  return (
    <div>
      <div className="w-[300px] mx-auto">
        <form onSubmit={handleSubmit} className="bg-blue-400 shadow-xl p-4 rounded-xl mt-10">
          <input
            className="border border-solid border-black mb-5 mt-5 rounded-xl py-2"
            type="text"
            name="name"
          />
          <br />
          <input
            className="border border-solid border-black mb-5 rounded-xl py-2"
            type="email"
            name="email"
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

export default FormsMaster;
