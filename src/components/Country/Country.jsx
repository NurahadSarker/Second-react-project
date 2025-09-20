import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, visitedCountriesHandle }) => {
    // console.log(country.area.area)
    const [visited, setVisited] = useState(false);
    // console.log(visitedCountriesHandle)

    const visitedBtnHandle = () => {
        //basic system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        //second system
        // setVisited(visited ? false : true)

        //third system
        setVisited(!visited)
        visitedCountriesHandle(country)
    }

    return (
        // <div className = {`country ${visited ? 'country-visited': 'country-not-visited'}`}>
        <div className = {`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={visitedBtnHandle}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;