import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

const Contact = () => {
  const { darkMode } = useSelector((state) => state.appSlice);
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
    <div
      className={`${darkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'
        } w-full overflow-x-hidden flex justify-center`}
    >
      <div id="contact" className=" flex flex-col w-[90%] overflow-x-hidden">
        <main className="flex-grow px-4 sm:px-8 lg:px-16 ">
          <div
            className={`${darkMode ? 'bg-background-dark' : 'bg-background-light'
              } w-[100%] md:w-[60%] mx-auto rounded-lg shadow-lg px-3 `}
          >
            {submitted ? (
              <p
                className={`${darkMode ? 'text-button-dark2' : 'text-button-light2'
                  } text-lg font-semibold text-center`}
              >
                {message}
              </p>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6 pb-20">
                <h2 className="text-2xl font-bold text-center">Contact Me</h2>

                <div className={` flex flex-col space-y-4`}>
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`${darkMode ? 'bg-input-dark border-input-dark text-text-light' : 'bg-input-light border-input-light'
                        } mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-input-dark-focus w-full`}
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
                      className={`${darkMode ? 'bg-input-dark border-input-dark text-text-light' : 'bg-input-light border-input-light'
                        } mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-input-dark-focus w-full`}
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
                      className={`${darkMode ? 'bg-input-dark border-input-dark text-text-light' : 'bg-input-light border-input-light'
                        } mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-input-dark-focus w-full`}
                      rows="4"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className={`${darkMode ? 'bg-button-dark text-text-dark hover:bg-button-dark-hover' : 'bg-button-light text-text-light hover:bg-button-light-hover'
                      } inline-flex items-center px-6 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-input-dark-focus`}
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
