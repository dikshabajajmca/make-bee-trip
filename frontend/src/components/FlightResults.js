import React from "react";

const FlightResults = ({ data, type }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-4">

      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow p-4 rounded flex justify-between items-center"
        >

          {/* LEFT SIDE */}
          <div>
            <h2 className="font-bold text-lg">
              {item.airline || item.train || item.hotel || item.operator}
            </h2>

            <p className="text-gray-500">
              {item.from && item.to
                ? `${item.from} → ${item.to}`
                : item.location || "N/A"}
            </p>
          </div>

          <div className="text-center">
            {item.departure && <p>{item.departure}</p>}
          </div>

          <div className="text-right">
            <p className="text-blue-600 font-bold">
              ₹{item.price}
            </p>

            <button className="bg-black text-white px-3 py-1 rounded mt-1">
              Book
            </button>
          </div>

        </div>
      ))}

    </div>
  );
};

export default FlightResults;