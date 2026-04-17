import React, { useState } from "react";

const Hero = () => {
  const [tab, setTab] = useState("flight");

  return (
    <div
      className="h-[80vh] flex flex-col justify-center items-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div className="bg-white p-4 rounded-full shadow mb-6 flex gap-4">
        <button onClick={() => setTab("flight")}>Flight</button>
        <button onClick={() => setTab("bus")}>Bus</button>
        <button onClick={() => setTab("train")}>Train</button>
        <button onClick={() => setTab("hotel")}>Hotel</button>
      </div>

      <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl w-[80%]">
        <h2 className="text-white text-center text-xl mb-4">
          Book {tab}
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <input placeholder="From" className="p-2 rounded" />
          <input placeholder="To" className="p-2 rounded" />
          <input type="date" className="p-2 rounded" />
          <input type="date" className="p-2 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Hero;