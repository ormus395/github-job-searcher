import { useState } from "react";

import "./search.css";

const Search = () => {
  // search values: string for company, job type, ect...
  // location, fulltime only (yes or no)
  let [searchParams, setSearchParams] = useState({});

  <div className="bar">
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <button>Search</button>
  </div>;
};

export default Search;
