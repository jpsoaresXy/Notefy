import { FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "../ui/input";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch }) => {
  return (
    <div className="w-80 max-w-sm relative">
      <Input
        type="search"
        placeholder="Search Notes"
        className="pl-8"
        value={value}
        onChange={onChange}
      />

      <FaMagnifyingGlass
        className=" w-4 h-4 absolute left-2.5 top-2.5 cursor-pointer text-slate-400 hover:text-black "
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
