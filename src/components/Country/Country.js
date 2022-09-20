import React from 'react';
import'./Country.css'

const Country = (props) => {
    const {area, region, population, name, flags} = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Area: {area}</h3>
            <h4>Region : {region}</h4>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;