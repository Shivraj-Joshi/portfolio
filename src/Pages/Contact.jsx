import React from "react";
import Swal from "sweetalert2";
// import Layout from "../Components/Layout/Layout";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    // <Layout>
    <div className="bg-black  flex flex-col items-center gap-4">
      <h1 className="text-white text-[40px] font-semibold mt-18 ">CONTACT</h1>
      <div className="container bg-black p-4 md:flex align-center justify-center">
        {/* left container */}
        <div className="left-container md:ml-16 bg-black md:h-[550px] md:w-[50%] p-4 px-4 flex flex-col gap-4">
          <h1 className="text-white font-semibold ">GET IN TOUCH</h1>
          <form
            onSubmit={onSubmit}
            action="submit"
            className="flex flex-col bg-[#0e0e0e] h-[400px] border border-[#3d3d3d] rounded text-white p-4 gap-4 md:w-[400px]"
          >
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              className="outline-none bg-[#1a1a1a] p-2 rounded border border-[#3d3d3d] text-white "
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Name *"
              className="outline-none bg-[#1a1a1a] p-2 rounded border border-[#3d3d3d] text-white "
            />
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message *"
              className="outline-none bg-[#1a1a1a] p-2 rounded border border-[#3d3d3d] text-white "
            ></textarea>

            <button
              type="submit"
              className="bg-white p-2 text-black rounded cursor-pointer hover:bg-[#1a1a1a] hover:text-white md:w-full hover:border hover:border-[#3d3d3d] transition-all duration-300 font-semibold "
            >
              Send <i className="ri-mail-send-fill"></i>
            </button>
          </form>
        </div>
        {/* right container */}
        <div className="bg-black md:w-[50%] flex flex-col p-4  gap-4 items-center ">
          <h3 className="text-white font-semibold uppercase ">Lets connect</h3>
          {/* social div */}
          <div className="connect p-2 bg-black  flex flex-col gap-10">
            <div className="phone flex items-center gap-4">
              <i className="ri-phone-fill bg-[#1a1a1a] text-white p-3 rounded border border-[#3d3d3d]"></i>{" "}
              <p className="text-white">
                Phone <br /> <span>+917011797223</span>
              </p>{" "}
            </div>
            <div className="email flex items-center gap-4">
              <i className="ri-mail-fill bg-[#1a1a1a] text-white p-3 rounded border border-[#3d3d3d]"></i>{" "}
              <p className="text-white">
                Email <br /> <span>iamshivrajjoshi07@gmail.com</span>
              </p>
            </div>
            <div className="address flex items-center gap-4">
              <i className="ri-map-pin-fill bg-[#1a1a1a] text-white p-3 rounded border border-[#3d3d3d] "></i>{" "}
              <p className="text-white">
                Address <br /> <span>sector-29,faridabad,haryana</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
};

export default Contact;
