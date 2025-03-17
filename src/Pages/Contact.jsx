import React from "react";

const Contact = () => {
  const onSubmit = () => {
    console.log("form submited");
  };
  return (
    <div className="main-container bg-black h-screen flex flex-col items-center   ">
      <h1 className="text-white text-[30px]">Contact</h1>
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

        <div className="right-container bg-[#0e0e0] h-[550px] w-[50%] flex flex-col items-center justify-center ">
          <div className="connect bg-black h-[300px] w-[300px] p-2 text-white">
            <h2 className="text-[25px] font-semibold">Let's Connect</h2>
            <div className="flex items-center gap-4 py-4 ">
              <i className="ri-phone-fill bg-[#1a1a1a] p-3 border border-[#3d3d3d] rounded"></i>{" "}
              <p>
                PHONE <br /> <span>+917011797223</span>
              </p>
            </div>
            <div className="flex items-center gap-4 py-4">
              <i className="ri-mail-fill bg-[#1a1a1a] p-3 border border-[#3d3d3d] rounded"></i>{" "}
              <p>
                EMAIL <br /> <span>iamshivrajjosi07@gmail.com</span>
              </p>
            </div>
            <div className="flex items-center gap-4 py-4">
              <i className="ri-map-pin-fill bg-[#1a1a1a] p-3 border border-[#3d3d3d] rounded"></i>{" "}
              <p>
                ADDRESS <br /> <span>Sector-29,Faridabad,Haryana,India</span>
              </p>
            </div>
          </div>
          <div className="location  h-[300px]  border border-[#3d3d3d] p-2 rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d2950.5099038165167!2d77.31909753826781!3d28.426275474681518!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x390cdda28cb87ccf%3A0xd9627bb839c592e3!2sBhoor%20Colony%2C%20Old%20Faridabad%2C%20Faridabad%2C%20Haryana%20121002!3m2!1d28.425940999999998!2d77.3216735!5e0!3m2!1sen!2sin!4v1742204596543!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="h-[250px] "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
