import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

export const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=690c7958f444871eb29819bf031b5b86`
      )
      .then((response) => {
        setCity(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setCity(null);
      });
  }, [search]);

  const renderWeatherInfo = () => {
    if (!city) {
      return <p>City Not Found</p>;
    }

    return (
      <>
        <br />
        <br />
        <h1>
          <i className="fas fa-street-view"></i> {search}
        </h1>
        <br />
        <h1>
          <i className="fas fa-temperature-high"></i> {city.main.temp}° Cel
        </h1>
        <br />
        <h6>
          Min: {city.main.temp_min}° Cel | Max: {city.main.temp_max}° Cel
        </h6>
        <br />
      </>
    );
  };

  return (
    <div>
      <br />
      <br />
      <div
        className="container"
        style={{
          textAlign: "center",
          color: "white",
          border: "2px solid #e5e4e2",
          borderRadius: "17px",
          width: "320px",
          height: "500px",
          backgroundImage: `url("https://images.unsplash.com/photo-1603411951734-23ae414fe112?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBuYXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,
        }}
      >
        <div>
          <br />
          <input
            style={{ padding: "15px", borderRadius: "20px" }}
            type="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="Search City Here..."
          />
        </div>
        {renderWeatherInfo()}
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            fontFamily: "Times New Roman', Times, serif",
            fontWeight: "600",
          }}
        >
          © {currentYear} COPYRIGHT
        </div>
      </div>
    </div>
  );
};
