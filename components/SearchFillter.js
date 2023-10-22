"use client";
import React from "react";
import { useState } from "react";
import CardList from "./CardList";
import InputField from "./InputField";

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
      <InputField setQuery={setQuery} />
      <div className="countries-container px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {filtered.map((countries, index) => (
          <CardList key={index + 1} countries={countries} index={index + 1} />
        ))}
      </div>
    </>
  );
}
