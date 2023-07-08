export default function Searchbar() {
  return (
    <div>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none"></div>
          <input
            type="text"
            id="simple-search"
            className=" bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-50 focus:border-violet-50 block w-[80vh] pl-4 p-3  dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Condition/Doctor/Procedure      |      City/State/Pin-Code   "
            required=""
          />
        </div>

        <button
          type="submit"
          className="p-2.5 ml-2 left-14 text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>

          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
}
