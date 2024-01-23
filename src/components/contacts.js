import React from "react";

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
        <li>
          <a
            href="https://www.linkedin.com/in/tausif-ardin-4b5a9a1b7/"
            className="text-blue-600 hover:underline"
          >
            LinkedIN
          </a>
        </li>{" "}
        <li>
          <a
            href="https://www.facebook.com/tausif.ardin.9/"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
        </li>{" "}
        <li>
          <a
            href="mailto:tausiffardin4@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email: tausifardin4@gmail.com
          </a>
        </li>{" "}
      </div>
    </div>
  );
};

export default Contacts;
