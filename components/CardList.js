import Link from "next/link";
import Image from "next/image";

export default function CardList({ countries, index }) {
  return (
    <>
      <div
        className="countries-card rounded-md shadow-lg bg-stone-100 hover:text-white hover:bg-stone-600 hover:scale-105 duration-300" id={`country-${index}`}>
        <Link href={`/country-detail/${countries.name.common}`}>
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
          <div className="card-description mt-5 p-3">
            <h5 className="font-semibold text-base lg:text-lg mb-3">
              {index}. {countries.name.common}
            </h5>
            <ol className="flex flex-col text-sm lg:text-base leading-relaxed gap-1">
              <li>Continent : {countries.continents.toString()}</li>
              <li>Capital : {!countries.capital ? "N/A" : countries.capital}</li>
            </ol>
          </div>
        </Link>
      </div>
    </>
  );
}