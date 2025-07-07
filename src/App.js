import { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";
function App() {
  let [countries, setCountries] = useState([]);
  let [countriesDisplay, setCountriesDisplay] = useState(countries);
  useEffect(() => {
    fetch(
      "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    )
      .then((rawData) => rawData.json())
      .then((data) => {
        setCountries(data);
        setCountriesDisplay(data);
      })
      .catch((e) => console.error("Error fetching data: ", e));
  }, []);

  function handleSearch(e) {
    let str = e.target.value;
    setCountriesDisplay(
      countries.filter((curr) => curr.common.toLowerCase().includes(str))
    );
  }
  return (
    <>
      <header>
        <input
          type="text"
          placeholder="Search for countries"
          onChange={handleSearch}
        ></input>
      </header>
      <div className="App">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {countriesDisplay.map((curr, i) => (
            <Card common={curr.common} png={curr.png} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
