import search_icon from "../assets/svg/search.svg";
import { cn } from "../utils/cn";
type SearchProps = {
  searchKey: string | number;
  setSearchKey: (key: string) => void;
};

function Search({ searchKey, setSearchKey }: SearchProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div
        className={cn(
          "flex items-center gap-x-2 bg-secondary950  rounded-md p-2",
          //   "hover:outline hover:outline-green-500",
          "focus-within:outline focus-within:outline-green-500"
        )}
      >
        <img src={search_icon} alt="" />
        <input
          type="text"
          name="searc"
          id="search"
          placeholder="Search....."
          className={cn("bg-transparent outline outline-0 border-none")}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>

      <button className="bg-secondary950 px-4 py-2 rounded-md hover:bg-primary500">
        Search
      </button>
    </div>
  );
}

export default Search;
