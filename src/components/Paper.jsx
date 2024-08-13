import React, { useState } from "react";
import useFetch from "./useFetch";
import SearchBar from "./SearchBar";

function Paper() {
  const [query,setQuery] = useState("Tech");
  const {papers,loading,error} = useFetch(query,5);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div>
        <div className="mx-auto mt-4 pt-3">
      <SearchBar handleSearch={handleSearch} />
      </div>
      {loading && <div>Loading Papers...</div>}
      {error && <div>Error: {error}</div>}
      <div className="mt-4 p-4">
        {papers.map((paper) => (
          <div key={paper.paperId} className=" border border-[#45171d] p-4 rounded-lg mb-4 p-4">
            <h2 className="font-bold text-3xl mb-4 text-[#fecea8]">{paper.title}</h2>
            <h5 className="font-bold text-xl mb-2 text-[#fecea8]">Abstract</h5>
            <p className="text-white">{paper.abstract}||{paper.title}</p>
            <div className="flex flex-col md:flex-row gap-4 mt-3 text-[#fecea8] text-sm text-center">
            <p className="rounded-full p-2 md:p-4 bg-[#e46161]"><strong>Authors:</strong> {paper.authors.map(author => author.name).join(', ')}</p>
            <p className="rounded-full p-2 md:p-4 bg-[#e46161]"><strong>Year:</strong> {paper.year}</p>
            <p className="rounded-full p-2 md:p-4 bg-[#e46161]"><strong>Citations:</strong> {paper.citationCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paper;
