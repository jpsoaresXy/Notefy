import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {
    console.log(searchQuery);
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow-sm">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
      />

      <ProfileInfo
        onLogout={() => {
          onLogout();
        }}
      />
    </div>
  );
};

export default Navbar;
