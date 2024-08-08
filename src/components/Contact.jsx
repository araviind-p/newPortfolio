import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qxc2udf",
        "template_f4cbblr",
        form.current,
        "UO8L5U3zMr4ve36RF"
      )
      .then(
        () => {
          setSubmitted(true);
          setMessage("SUCCESS! Your message has been sent.");
        },
        (error) => {
          setMessage("FAILED... Please try again later.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className=" bg-[#1F2937] w-full overflow-x-hidden flex justify-center">
      <div id="contact" className="min-h-screen flex flex-col bg-[#1F2937] w-[85%] overflow-x-hidden">
        <main className="flex-grow p-4 sm:p-8 lg:p-16">
          <div className="w-[90%] md:w-[60%] mx-auto bg-gray-800 rounded-lg shadow-lg">
            {submitted ? (
              <p className="text-green-600 text-lg font-semibold text-center">
                {message}
              </p>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6 text-white pb-20">
                <h2 className="text-2xl font-bold text-center">Contact Me</h2>

                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-semibold">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                      rows="4"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                    <FaCheck className="ml-2" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
