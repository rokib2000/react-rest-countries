import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props.country);
  const { name, capital, region, flags } = props.country;
  return (
    <div className="country">
      <h3>Country Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>capital: {capital}</p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
