"use client";

import { useState, useEffect } from "react";
import { Linkedin, Facebook, Mail } from "lucide-react";

const Contacts = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the data to a backend server
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-row justify-around max-h-screen min-h-[400px] bg-gray-100 p-10">
      {" "}
      <div className="flex items-center justify-center">
        {" "}
        <span className="font-bold text-5xl font-serif text-gray-800">
          GET IN TOUCH
        </span>{" "}
      </div>
      <div className="flex flex-row items-start justify-center space-y-4">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="flex items-center space-x-2">
            {" "}
            <Linkedin color="#a3c6c4" size={24} />
            <a
              href="https://www.linkedin.com/in/tausif-fardin/"
              className="text-blue-800 hover:underline"
            >
              LinkedIN
            </a>
          </div>{" "}
          <div className="flex items-center space-x-2">
            {" "}
            <Facebook color="#a3c6c4" size={24} />
            <a href="#" className="text-blue-800 hover:underline">
              Facebook
            </a>
          </div>{" "}
          <div className="flex items-center space-x-2">
            {" "}
            <Mail color="#a3c6c4" size={24} />
            <a
              href="mailto:tausiffardin4@gmail.com"
              className="text-blue-800 hover:underline"
            >
              Email: tausiffardin4@gmail.com
            </a>
          </div>{" "}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 w-full h-32 resize-none"
              required
            ></textarea>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
