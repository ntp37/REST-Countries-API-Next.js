import React from "react";
import Link from "next/link";
import { FaMoneyBillTransfer, FaLandmark, FaMapLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { BiSolidArea, BiSolidMap } from "react-icons/bi";
import { IoMdClock } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { TbWorldCheck } from "react-icons/tb";
import { TableBody } from "./TableBody";

export default function TableDetails(infomations) {
  const {name,continent,capital,map,area,timezones,currencies,population,language} = infomations;

  const mapLocation = (location) => {
    return (
      <Link target="_blank" href={location} className="hover:text-red-500">
        location in GoogleMaps
      </Link>
    );
  };

  return (
    <table className="table-auto border-separate border-spacing-y-5 sm:border-spacing-y-3">
      <tbody className="text-left text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
        <TableBody
          details={name}
          icon={<TbWorldCheck />}
          title={"Official name"}
        />
        <TableBody
          details={continent}
          icon={<FaMapLocationDot />}
          title={"Continents"}
        />
        <TableBody
          details={!capital ? "N/A" : capital.toString()}
          icon={<FaLandmark />}
          title={"Capital"}
        />
        <TableBody
          details={mapLocation(map)}
          icon={<BiSolidMap />}
          title={"Location"}
        />
        <TableBody
          details={area}
          icon={<BiSolidArea />}
          title={`Area \u00A0(km\u00B2)`}
        />
        <TableBody
          details={timezones}
          icon={<IoMdClock />}
          title={"Timezone"}
        />
        <TableBody
          icon={<FaMoneyBillTransfer />}
          title={"Currency"}
          details={!currencies ? "N/A" : Object.values(currencies)
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(", ")
          }
        />
        <TableBody
          details={population}
          icon={<FaPeopleGroup />}
          title={"Population"}
        />
        <TableBody
          details={!language ? "N/A" : Object.values(language).join(", ")}
          icon={<IoLanguage />}
          title="Official languages&emsp;"
        />
      </tbody>
    </table>
  );
}