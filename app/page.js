import SearchFillter from "@/components/SearchFillter";
import React from "react";

export async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

export default async function Home() {
  const data = await getData();
  // console.log(data);

  return (
    <>
      <SearchFillter data={data} />
    </>
  );
}