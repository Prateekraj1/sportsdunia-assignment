import InputGroup from "../common/form/InputGroup";
import InputLabel from "../common/form/InputLabel";

const SearchFilters = ({ search, setSearch, dateRange, setDateRange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 w-full">
    <InputGroup>
      <InputLabel id="search">Search</InputLabel>
      <input
        className="mt-1 border p-2 rounded w-full dark:bg-gray-800 dark:text-white shadow-sm"
        type="text"
        placeholder="🔍 Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputGroup>
    <InputGroup>
      <InputLabel id="start-date">Start Date</InputLabel>
      <input
        type="date"
        value={dateRange.start}
        onChange={(e) =>
          setDateRange({ ...dateRange, start: e.target.value })
        }
        className="mt-1 border p-2 rounded w-full dark:bg-gray-800 dark:text-white"
      />
    </InputGroup>
    <InputGroup>
      <InputLabel id="end-date">End Date</InputLabel>
      <input
        type="date"
        value={dateRange.end}
        onChange={(e) =>
          setDateRange({ ...dateRange, end: e.target.value })
        }
        className="mt-1 border p-2 rounded w-full dark:bg-gray-800 dark:text-white"
      />
    </InputGroup>
  </div>
);

export default SearchFilters;
