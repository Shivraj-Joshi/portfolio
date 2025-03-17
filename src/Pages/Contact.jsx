import React from "react";

const Contact = () => {
  const onSubmit = () => {
    console.log("form submited");
  };
  return (
    <div className="main-container bg-black h-screen flex flex-col items-center   ">
      <h1 className="text-white">Contact</h1>
      <div className="flex w-screen">
        <div className="left-container bg-black h-[550px] w-[50%] ">
          <div className="contact text-white   flex mt-10 justify-center ">
            <form
              onSubmit={onSubmit}
              className="bg-[#0e0e0e]  rounded-xl flex flex-col justify-center w-[500px] p-4 gap-8"
            >
              <h3 className="text-[#64686a]">get in touch </h3>
              <label htmlFor="username">Name</label>
              <input
                type="text"
                placeholder="Name *"
                required
                className="border border-[#3d3d3d] rounded p-2 bg-[#1a1a1a] outline-none"
              />
              <label htmlFor="username">Email</label>
              <input
                type="text"
                required
                placeholder="Email *"
                className="border border-[#3d3d3d] rounded p-2 bg-[#1a1a1a] outline-none"
              />
              <label htmlFor="username">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message *"
                required
                autoComplete="off"
                className="border border-[#3d3d3d] rounded p-2 bg-[#1a1a1a] outline-none"
              ></textarea>
              <button className="bg-black text-white hover:bg-white hover:text-black p-2 rounded font-semibold cursor-pointer">
                Send
              </button>
            </form>
          </div>
        </div>
        {/* right container */}

        <div className="right-container bg-slate-500 h-[550px] w-[50%] flex flex-col items-center justify-center">
          <div className="connect bg-green-400 h-[300px] w-[300px]  ">
            <h2>Lets connect</h2>
            <p>
              {" "}
              <i className="ri-phone-fill bg-[#1a1a1a] border border-[#3d3d3d] p-2 text-white rounded"></i>{" "}
              phone
              <br /> <span>+917011797223</span>
            </p>
            <p>
              {" "}
              <i className="ri-mail-fill bg-[#1a1a1a] border border-[#3d3d3d] p-2 text-white rounded"></i>{" "}
              Email
              <br /> <span>+917011797223</span>
            </p>
            <p>
              {" "}
              <i className="ri-map-pin-line bg-[#1a1a1a] border border-[#3d3d3d] p-2 text-white rounded"></i>{" "}
              Address
              <br /> <span>+917011797223</span>
            </p>
          </div>
          <div className="location bg-pink-200 h-[200px] w-[200px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
