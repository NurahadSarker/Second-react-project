import React from 'react';

const Country = ({country}) => {
    console.log(country.population.population)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;