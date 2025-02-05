import { Link } from "react-router-dom";

interface CountryProps {
  country: {
    flags: { png: string };
    name: { common: string };
    population: number;
    region: string;
    capital: string[];
  };
}

const CountryCard: React.FC<CountryProps> = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="card">
      <Link to={`/country/${name.common}`} className="card-link">
        <img className="flag-img" src={flags.png} alt={name.common} />
        <div className="card-text">
          <h2 className="name-country">{name.common}</h2>
          <div className="card-context">
            <p className="context">Population: {population.toLocaleString()}</p>
            <p className="context">Region: {region}</p>
            <p className="context">
              Capital: {capital.length ? capital[0] : "No capital"}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CountryCard;
