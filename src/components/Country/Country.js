import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, region } = props.country;
  return (
    <div className="country">
      <h3>Country Name: {name.common}</h3>
      <p>capital: {capital}</p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
