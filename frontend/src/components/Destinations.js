import React from "react";

const Destinations = () => {
  return (
    <div className="p-6">
      <h2 className="text-center text-2xl mb-6">Popular Destinations</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="shadow rounded p-4">Goa</div>
        <div className="shadow rounded p-4">Manali</div>
        <div className="shadow rounded p-4">Dubai</div>
      </div>
    </div>
  );
};

export default Destinations;