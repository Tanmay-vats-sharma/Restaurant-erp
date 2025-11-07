import React, { useState } from "react";

/**
 * Props:
 *  - onFilterChange(filterString) where filterString is "all" | "veg" | "nonveg"
 */
const FoodFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("all");

  const handleFilter = (type) => {
    setFilter(type);
    onFilterChange(type);
  };

  return (
    <div className="flex items-center gap-3 ml-12">
      {/* Veg Toggle (green dot + pill) */}
      <button
        onClick={() => handleFilter("veg")}
        aria-pressed={filter === "veg"}
        className={`flex items-center gap-3 px-3 py-1.5 rounded-full transition-all duration-200 border ${
          filter === "veg" ? "bg-green-50 border-green-600" : "bg-white border-gray-200"
        } shadow-sm`}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            filter === "veg" ? "bg-green-600 border-green-700" : "border-gray-300 bg-white"
          }`}
          aria-hidden
        >
          {/* small inner dot */}
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
        <span className={`text-sm font-medium ${filter === "veg" ? "text-green-700" : "text-gray-700"}`}>
          Veg
        </span>
      </button>

      {/* Non-Veg Toggle (red triangle + pill) */}
      <button
        onClick={() => handleFilter("nonveg")}
        aria-pressed={filter === "nonveg"}
        className={`flex items-center gap-3 px-3 py-1.5 rounded-full transition-all duration-200 border ${
          filter === "nonveg" ? "bg-red-50 border-red-600" : "bg-white border-gray-200"
        } shadow-sm`}
      >
        <div className={`w-5 h-5 flex items-center justify-center ${filter === "nonveg" ? "text-red-700" : "text-gray-400"}`} aria-hidden>
          {/* triangle */}
          <div
            className={`w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent ${
              filter === "nonveg" ? "border-b-red-600" : "border-b-gray-300"
            }`}
          />
        </div>
        <span className={`text-sm font-medium ${filter === "nonveg" ? "text-red-700" : "text-gray-700"}`}>
          Non-Veg
        </span>
      </button>

      {/* All */}
      {/* <button
        onClick={() => handleFilter("all")}
        aria-pressed={filter === "all"}
        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
          filter === "all" ? "bg-amber-50 border-amber-300 text-amber-700" : "bg-white border-gray-200 text-gray-700"
        }`}
      >
        All
      </button> */}
    </div>
  );
};

export default FoodFilter;
