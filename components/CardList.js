import Link from "next/link";
import Image from "next/image";

export default function CardList({ countries, index }) {
  return (
    <>
      <div className="countries-card shadow-2xl bg-slate-50" id={`country-${index}`}>
        <div className="flex justify-center items-center p-4">
          <Image
            priority
            style={{ width: "auto", height: "7rem" }}
            width={400}
            height={400}
            src={countries.flags.png}
            alt={`${countries.name.common}-flag`}
          />
        </div>
        <Link href={`/country-detail/${countries.name.common}`}>
          <div className="card-description mt-5 p-3">
            <h5 className="font-semibold text-base lg:text-lg mb-2 hover:text-red-500">
              {index}. {countries.name.common}
            </h5>
            <ol className="text-sm lg:text-base leading-relaxed">
              <li>Continent : {countries.continents.toString()}</li>
              <li>Capital : {!countries.capital ? "N/A" : countries.capital}</li>
            </ol>
          </div>
        </Link>
      </div>
    </>
  );
}
