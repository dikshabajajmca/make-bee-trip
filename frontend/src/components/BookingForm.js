import React, { useState } from "react";
import axios from "axios";
import FlightResults from "./FlightResults";

const BookingForm = () => {
  const [type, setType] = useState("flight"); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 
  const handleSearch = async () => {
    setLoading(true);
    setError("");

    let url = "";

    if (type === "flight") url = "http://localhost:5000/api/flights";
    else if (type === "bus") url = "http://localhost:5000/api/bus";
    else if (type === "train") url = "http://localhost:5000/api/train";
    else if (type === "hotel") url = "http://localhost:5000/api/hotel";

    try {
      const res = await axios.get(url);
      console.log("API RESPONSE:", res.data);

      setData(res.data);
    } catch (err) {
      console.log("API ERROR:", err);
      setError("Backend not connected!");
    }

    setLoading(false);
  };

  return (
    <div className="text-center mt-6">

      {/* 🔥 TABS */}
      <div className="flex justify-center gap-3 mb-4">

        <button
          onClick={() => setType("flight")}
          className={`px-4 py-2 rounded ${type === "flight" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Flights
        </button>

        <button
          onClick={() => setType("bus")}
          className={`px-4 py-2 rounded ${type === "bus" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Bus
        </button>

        <button
          onClick={() => setType("train")}
          className={`px-4 py-2 rounded ${type === "train" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Trains
        </button>

        <button
          onClick={() => setType("hotel")}
          className={`px-4 py-2 rounded ${type === "hotel" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Hotels
        </button>

      </div>

      
      <button
        onClick={handleSearch}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        {loading ? "Searching..." : `Search ${type}`}
      </button>

     
      {error && (
        <p className="text-red-500 mt-3">{error}</p>
      )}

      {data.length > 0 && (
        <div className="mt-6">
          <FlightResults data={data} type={type} />
        </div>
      )}

    </div>
  );
};

export default BookingForm;