import { useEffect, useState } from "react";
import { getAllCountries } from "../services/api";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";
import Filter from "../components/Filter";

const Home = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (region: string) => {
    setSelectedRegion(region);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      const sortedData = data.sort((a: any, b: any) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedData);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (searchQuery) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRegion) {
      filtered = filtered.filter(
        (country) =>
          country.region.toLowerCase() === selectedRegion.toLowerCase()
      );
    }

    setFilteredCountries(filtered);
  }, [searchQuery, selectedRegion, countries]);

  return (
    <div>
      <Header />
      <Filter onSearch={handleSearch} onFilter={handleFilter} />
      <div className="cards-container">
        <ul className="list-of-card">
          {filteredCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
