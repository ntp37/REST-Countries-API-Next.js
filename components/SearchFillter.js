"use client";
import React from "react";
import { useState } from "react";
import CardList from "./CardList";

export default function SearchFillter({ data }) {
  const [query, setQuery] = useState("");
// console.log(data);

  const searchFillter = (countriesArr) => {
    return countriesArr.filter((data) =>
      data.name.common.toLowerCase().includes(query)
    );
  };

  // import countries data from props into the Filter function
  const filtered = searchFillter(data);

  return (
    <>
      <div className="my-5">
        <input
          type="text"
          placeholder="Search for countries"
          className="w-full h-12 p-4 shadow-lg"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="countries-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {filtered.map((countries, index) => (
          <CardList key={index + 1} countries={countries} index={index + 1} />
        ))}
      </div>
    </>
  );
}
