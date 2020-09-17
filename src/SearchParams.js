import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle,WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location{" "}
          <input
            id="Location"
            value={location}
            placeholder="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
