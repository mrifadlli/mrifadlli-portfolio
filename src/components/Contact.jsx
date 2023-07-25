import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen p-4 bg-gradient-to-b from-gray-900 to-black pt-10"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-2 text-gray-300 border-[#eeeeee] p-2">
            Contact
          </p>
          <p className="py-2 text-white">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/da16a489-6e8c-4c11-b2e2-8b6f0354472d"
            method="POST"
            className="flex flex-col md:w-1/2 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 text-white rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 text-white rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 text-white rounded-md focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-slate-950 to-slate-900 px-8 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
