import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Header from "../components/Header";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fullName } = useParams();
  console.log(fullName);
  useEffect(() => {
    const getSingleCountry = async () => {
      const url = `https://restcountries.com/v3.1/name/${fullName}?fullText=true`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setCountry(data);
            setLoading(false);
          }
        });
    };
    getSingleCountry();
  }, []);
  if (loading) {
    return (
      <section className="section-center">
        <h3 className="loading">Loading...</h3>
      </section>
    );
  }
  return (
    <main>
      <Header />
      {country.map((country, index) => {
        const {
          name: { common: countryName },
          flags: { png: img },
          population,
          region,
          subregion,
          capital,
          unMember,
          tld,
          currencies,
        } = country;
        const currency = Object.keys(currencies);
        return (
          <article className="section-center" key={index}>
            <Link to="/" className="link-btn">
              back home
            </Link>
            <div className="country-info">
              <div className="country-info-container">
                <div className="country-img">
                  <img src={img} className="flag-img" alt={countryName} />
                </div>

                <div className="country-details-1">
                  <h4>{countryName}</h4>
                  <p>
                    <strong>UN member:</strong> {unMember ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Population:</strong> {population}
                  </p>
                  <p>
                    <strong>Region:</strong> {region}
                  </p>
                  <p>
                    <strong>Sub region:</strong> {subregion}
                  </p>
                  <p>
                    <strong>capital</strong>: {capital}
                  </p>
                </div>
                <div className="country-details-2">
                  <p>
                    <strong>Top level Domain</strong>: {tld}
                  </p>
                  <p>
                    <strong>currencies</strong>: {currencies[currency].name}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
};
export default SingleCountry;
