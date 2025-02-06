import React, { useState } from "react";

type FilterProps = {
  onSearch: (query: string) => void;
  onFilter: (region: string) => void;
};

export default function Filter({ onSearch, onFilter }: FilterProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };
  const handleRegionSelect = (region: string) => {
    onFilter(region === "All Regions" ? "" : region);
  };
  return (
    <div className="filter-container">
      <div className="filter-content">
        <div className="input-container">
          <svg
            className="search-icon"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
              fill="var(--color-white)"
            />
          </svg>
          <input
            className="input-search"
            type="text"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="filter-region-container">
          <div className="dropdown">
            <button className="dropdown-btn">
              Filter by region
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16L8 12H16L12 16Z" fill="var(--color-white)" />
              </svg>
            </button>
            <div className="dropdown-content">
              {[
                "All Regions",
                "Africa",
                "Americas",
                "Asia",
                "Europe",
                "Oceania",
                "Antarctic",
              ].map((region) => (
                <button
                  key={region}
                  className="dropdown-item"
                  onClick={() => handleRegionSelect(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
