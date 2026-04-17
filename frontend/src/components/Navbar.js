import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-6 py-3 flex items-center justify-between">

      <div className="flex items-center gap-3">

        <img
          src="/logo.png"
          alt="Make Bee Trip Logo"
          className="h-16 w-16 rounded-full"
        />

        <h1 className="text-2xl font-bold text-yellow-500">
          Make Bee Trip 
        </h1>

      </div>

    
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">

        <span className="cursor-pointer hover:text-blue-500">
          Flights
        </span>

        <span className="cursor-pointer hover:text-blue-500">
          Hotels
        </span>

        <span className="cursor-pointer hover:text-blue-500">
          Trains
        </span>

        <span className="cursor-pointer hover:text-blue-500">
          Buses
        </span>

      </div>

      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Login / Signup
        </button>
      </div>

    </div>
  );
};

export default Navbar;