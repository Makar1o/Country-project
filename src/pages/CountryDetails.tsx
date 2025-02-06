import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { getCountryByName } from "../services/api";
import { useNavigate } from "react-router-dom";

interface CountryDetailsProps {
  flags: { png: string };
  name: { common: string; nativeName?: Record<string, { official: string }> };
  population?: number;
  region?: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: Record<string, { name: string }>;
  languages?: Record<string, string>;
  borders?: string[];
}

const CountryDetails: React.FC = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<CountryDetailsProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      const fetchCountryDetails = async () => {
        const countryData = await getCountryByName(name);
        setCountry(countryData);
      };

      fetchCountryDetails();
    }
  }, [name]);

  if (!country) return <div>Loading...</div>;
  const formatData = (data?: string[] | Record<string, string>) =>
    data
      ? Array.isArray(data)
        ? data.join(", ")
        : Object.values(data).join(", ")
      : "N/A";

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].official
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";

  return (
    <div>
      <Header />
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg
            width="30"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12L11 6M5 12L11 18M5 12H19"
              stroke="var(--color-white)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </button>
      </div>
      <div className="country-details-container">
        <img
          className="details-flag"
          src={country.flags.png}
          alt={country.name.common}
        />
        <div className="info-country-countainer">
          <div>
            <h2 className="name-country">{country.name.common}</h2>
          </div>
          <div className="describe-container">
            <div>
              <p>
                <span className="bold-txt">Native Name:</span> {nativeName}
              </p>
              <p>
                <span className="bold-txt">Population:</span>{" "}
                {country.population?.toLocaleString() || "N/A"}
              </p>
              <p>
                <span className="bold-txt">Region:</span>{" "}
                {country.region || "N/A"}
              </p>
              <p>
                <span className="bold-txt">Subregion:</span>{" "}
                {country.subregion || "N/A"}
              </p>
              <p>
                <span className="bold-txt">Capital:</span>{" "}
                {formatData(country.capital)}
              </p>
            </div>
            <div>
              <p>
                <span className="bold-txt">Top Level Domain:</span>{" "}
                {formatData(country.tld)}
              </p>
              <p>
                <span className="bold-txt">Currencies:</span> {currencies}
              </p>
              <p>
                <span className="bold-txt">Languages: </span>
                {formatData(country.languages)}
              </p>
            </div>
          </div>
          <div className="borders">
            <p>
              <span className="bold-txt">Borders:</span>{" "}
              {formatData(country.borders)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
