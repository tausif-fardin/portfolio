import React from "react";
import { Linkedin, Facebook, Mail } from "lucide-react";

const Contacts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 max-h-screen min-h-[400px] bg-gray-100 p-10">
      {" "}
      <div className="flex items-center justify-center">
        {" "}
        <span className="font-bold text-5xl font-serif text-gray-800">
          GET IN TOUCH
        </span>{" "}
      </div>
      <div className="flex flex-col items-start justify-center space-y-4">
        {" "}
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
    </div>
  );
};

export default Contacts;
