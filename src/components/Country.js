import React from "react";
import { Link } from "react-router-dom";
const Country = ({
  population,
  flags: { png: img },
  region,
  name: { common: name },
  capital,
}) => {
  return (
    <article>
      <Link to={`/single-country/${name}`} className="card">
        <img src={img} alt={name + "flag"} />
        <div className="card-contents">
          <h4>{name.length > 10 ? `${name.slice(0, 10)}..` : name}</h4>
          <p>
            <strong>population:&nbsp;</strong>
            {parseInt(population).toLocaleString("en-US")}
          </p>
          <p>
            <strong>Region:</strong>&nbsp;{region}
          </p>
          <p>
            <strong>Capital:</strong>&nbsp;{capital}
          </p>
        </div>
      </Link>
    </article>
  );
};
export default Country;
