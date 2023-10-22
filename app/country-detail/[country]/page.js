import Image from "next/image";
import TableDetails from "@/components/TableDetails";

export async function generateStaticParams() {
  const data = await fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
  return data.map((countries) => ({
    country: countries.name.common
  }))
}

// export async function getCountry(countryParams) {
//   const res = await fetch('https://restcountries.com/v3.1/name/'+ countryParams)
//   const country = res.json()
//   return country
// }

export async function generateMetadata({ params }) {
  return {title: decodeURIComponent(params?.country)}
}

export async function getCountry(countryParams) {
  const data = await fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
  return data.filter((country) => country.name.common.localeCompare(countryParams) === 0)
}

export default async function Page({ params }) {
  const countryData = await getCountry(decodeURIComponent(params?.country))
  // const country = await getCountry(params)

  return (
    <>
      <div className="country-detail bg-neutral-50">
        {countryData.map((details) => (
          <div className="p-3 sm:p-9 shadow-2xl" id={details.name.common} key={Number(params.country)}>
            <div className="flex flex-col gap-11">
              <div className="flex items-center justify-center">
                <Image priority style={{width: 'auto', height: '9.5rem'}} width={400} height={250} src={details.flags.png} alt={`${details.name.common}-flag`} />
              </div>
              <div className="text-center text-xl sm:text-3xl font-semibold mb-10">
                <h3>{details.name.common}</h3>
              </div>
            </div>
            <article className="details">
              <TableDetails 
                name={details.name.official}
                continent={details.continents.toString()}
                capital={details.capital}
                map={details.maps.googleMaps}
                area={details.area.toLocaleString()}
                timezones={details.timezones.toString()}
                currencies={details.currencies}
                population={details.population.toLocaleString()}
                language={details.languages}
              />
            </article>
          </div>
        ))}
      </div>
    </>
  )
}
