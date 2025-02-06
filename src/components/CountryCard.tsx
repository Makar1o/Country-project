import { Link } from "react-router-dom";

interface CountryProps {
  country: {
    flags: { png: string };
    name: { common: string };
    population: number;
    region: string;
    capital: string[];
    borders?: string[]; // Додаємо поле для кордонів
  };
}

const CountryCard: React.FC<CountryProps> = ({ country }) => {
  const { flags, name, population, region, capital, borders } = country;

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
            {borders && borders.length > 0 && (
              <div className="borders">
                <p className="context">Borders:</p>
                <div className="border-list">
                  {borders.map((border) => (
                    <Link
                      key={border}
                      to={`/country/${border}`}
                      className="border-link"
                    >
                      {border}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CountryCard;
