import React, { useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchForm";
import DropDownMenu from "../components/DropDownMenu";
import Country from "../components/Country";
import { useContextGlobal } from "../context/AppContext";
export default function Home() {
  const { fetchData, data, loading } = useContextGlobal();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <Header />
      <section className="section-center">
        <div className="content-container">
          <SearchBar />
          <DropDownMenu />
        </div>
      </section>
      <section className="section-center cards-section">
        <div className="cards-container">
          {loading ? (
            <h4 className="loading">Loading...</h4>
          ) : (
            data.map((country, index) => {
              return <Country {...country} key={index} />;
            })
          )}
        </div>
      </section>
    </main>
  );
}
