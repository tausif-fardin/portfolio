"use client";

import { useState, useEffect } from "react";
import { Linkedin, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

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
    <div className="flex flex-col lg:flex-row justify-around max-h-screen min-h-[400px] bg-gray-100 p-10">
      {" "}
      <div className="flex items-center justify-center">
        {" "}
        <span className="font-bold text-5xl font-serif text-gray-800">
          GET IN TOUCH
        </span>{" "}
      </div>
      <div className="flex flex-col items-start justify-center space-y-4">
        <div className="flex items-center space-x-2 mt-3">
          {" "}
          <Linkedin color="#105854" size={24} />
          <a
            href="https://www.linkedin.com/in/tausif-fardin/"
            className="text-[#105854] hover:underline"
          >
            LinkedIn
          </a>
        </div>{" "}
        <div className="flex items-center space-x-2 mt-3">
          {" "}
          <Facebook color="#105854" size={24} />
          <a href="#" className="text-[#105854] hover:underline">
            Facebook
          </a>
        </div>{" "}
        <div className="flex items-center space-x-2 mt-3">
          {" "}
          <Mail color="#105854" size={24} />
          <a
            href="mailto:tausiffardin4@gmail.com"
            className="text-[#105854] hover:underline"
          >
            tausiffardin4@gmail.com
          </a>
        </div>{" "}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex items-center space-x-2 my-2">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="flex items-center space-x-2 my-2">
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="flex items-center space-x-2 my-2">
          <Textarea
            value={formData.message}
            onChange={handleInputChange}
            name="message"
            placeholder="Your Message"
          />
        </div>
        <div className="flex self-start space-x-2 my-3">
          <Button variant="default">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
