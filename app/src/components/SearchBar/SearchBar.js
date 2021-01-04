import { useState } from "react";

import "./search.css";

const SearchBar = () => {
  // search values: string for company, job type, ect...
  // location, fulltime only (yes or no)
  let [searchParams, setSearchParams] = useState({});

  return (
    <div className="search-bar">
      <form className="search-form">
        <div className="section general">
          <input
            type="text"
            name=""
            id=""
            placeholder="Filter by title, company, expertise"
          />
        </div>
        <div className="section location">
          <input type="text" name="" id="" placeholder="Location..." />
        </div>
        <div className="section more">
          <input type="checkbox" name="type" id="type" className="type" />
          <label htmlFor="">Full Time Only</label>
          <input type="submit" value="Search" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
