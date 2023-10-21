export default function InputField({ setQuery }) {
  return (
    <div className="sticky top-0 z-10 pt-10 bg-neutral-50">
      <div className="text-center text-lg sm:text-2xl font-semibold">
        <h1>Countries in the World</h1>
      </div>
      <div className="mt-5 mb-7">
        <input
          type="text"
          placeholder="Search for countries"
          className="w-full h-10 sm:h-12 p-4 shadow-lg rounded-3xl text-sm sm:text-base"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
