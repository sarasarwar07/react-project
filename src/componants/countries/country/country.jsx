import React, { useState } from 'react';
import './country.css'

const country = ({country , handleVisitedCountries , handleVisitedFlags}) => {

    const [visited , setVisiteed]= useState(false);
    // console.log(country)
    
    const handleVisited= () =>{
        
        // if(visited){
        //     setVisiteed(false)
        // }
        // else{ 
        //     setVisiteed(true);
        // }
        setVisiteed(!visited);
        handleVisitedCountries(country);
        // console.log('Button Clicked')
    } 
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}</p>
            <button onClick={handleVisited} className='btn'>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}} className='btn'>Add Visited Flag</button>
        </div>
    );
};

export default country;