import React from "react";
import Link from "next/link";

export default function TableDetails( details ) {
  const {name,continent,capital,map,area,timezones,currencies,population,language} = details;

  return (
    <table className="table-auto border-separate border-spacing-y-5 sm:border-spacing-y-3">
      <tbody className="text-left text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
        <tr>
          <th>Official name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Continents</th>
          <td>{continent}</td>
        </tr>
        <tr>
          <th>Capital</th>
          <td>{!capital ? "N/A" : capital.toString()}</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>
            <Link target="_blank" href={map} className="hover:text-red-500">
              location in GoogleMaps
            </Link>
          </td>
        </tr>
        <tr>
          <th>Area &nbsp;(km<sup>2</sup>)</th>
          <td>{area}</td>
        </tr>
        <tr>
          <th>Timezone</th>
          <td>{timezones}</td>
        </tr>
        <tr>
          <th>Currency</th>
          <td>
            {!currencies
              ? "N/A"
              : Object.values(currencies)
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(", ")}
          </td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{population}</td>
        </tr>
        <tr>
          <th>Official languages&emsp;</th>
          <td>{!language ? "N/A" : Object.values(language).join(", ")}</td>
        </tr>
      </tbody>
    </table>
  );
}
