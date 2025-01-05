import React from "react";
import PageNav from "../components/PageNav";

function Contact() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Fixed PageNav */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <PageNav />
      </div>

      {/* Content Section with padding to offset the fixed PageNav */}
      <div
        id="contact"
        className="pt-40 max-w-[1040px] m-auto md:pl-20 p-4 py-16"
      >
        {/* Page Title */}
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
          Please contact us for a free quote.
        </h1>
        {/* Form */}
        <form
          action="https://getform.io/f/ayvvdowb"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Phone</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
              name="message"
            ></textarea>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">File Upload</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="file"
              name="file"
            />
          </div>
          <button className="bg-[#001b5e] text-gray-100 rounded-lg mt-4 w-full p-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
