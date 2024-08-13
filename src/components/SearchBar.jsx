import React, { useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"

function SearchBar({handleSearch}) {
  const [query,setQuery] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-[300px] relative mx-auto">
        <div className="relative flex justify-between">
        <input
          type="search"
          value={query}
          className="bg-[#fecea8] rounded-full w-full text-[#e46161] p-2"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter topic to search for.."
        />
         <button type="submit" className="rounded-full bg-[#e46161] absolute right-0 p-2 h-10 w-10">
          <AiOutlineSearch className="text-[#fecea8] font-extrabold text-xl mx-auto"/>
        </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
