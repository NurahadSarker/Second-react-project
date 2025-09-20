import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])

    const visitedCountriesHandle = (country) => {
        console.log('clicked', country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries)
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total visited country: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        visitedCountriesHandle={visitedCountriesHandle}
                        key={country.cca3.cca3}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;