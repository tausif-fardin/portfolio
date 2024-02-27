"use client";

import React, { useState } from "react";
import { Linkedin, Facebook, Mail, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contacts = () => {
  // ... State and handleInputChange function
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // Function to handle input change

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    // ... Reset form
  };

  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="flex lg:flex-row flex-col justify-center gap-2">
        <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-md flex justify-center items-center">
          <div className="flex flex-col justify-start">
            <a
              href="tel:+1234567890"
              className="flex flex-row justify-start items-center text-sm  lg:text-lg font-semibold mb-2 hover:underline"
            >
              <PhoneIcon
                color="#105854"
                size={24}
                className="inline-block mr-2"
              />
              +123-456-7890
            </a>
            <a
              href="mailto:tausiffardin4@gmail.com"
              className="flex flex-row justify-start items-center text-sm  lg:text-lg font-semibold mb-2 hover:underline"
            >
              <Mail color="#105854" size={24} className="inline-block mr-2" />
              tausiffardin4@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/tausif-fardin/"
              className="flex flex-row justify-start items-center text-sm  lg:text-lg font-semibold hover:underline"
            >
              <Linkedin
                color="#105854"
                size={24}
                className="inline-block mr-2"
              />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <hr className="h-1/2 border border-gray-700" />
        </div>
        <div className="w-full lg:w-1/2 md:w-full p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-serif text-center mb-8">Get in Touch</h2>

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

            <div className="flex self-center space-x-2 my-3">
              <Button variant="default">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
