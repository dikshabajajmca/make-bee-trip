import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100 p-6 text-center">
      <h2 className="text-2xl mb-6">Services</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow">Flights</div>
        <div className="bg-white p-4 shadow">Hotels</div>
        <div className="bg-white p-4 shadow">Trains</div>
        <div className="bg-white p-4 shadow">Bus</div>
      </div>
    </div>
  );
};

export default Services;