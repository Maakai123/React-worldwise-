/* eslint-disable react/prop-types */

import styles from './CountryList.module.css'
import Spinner from "./Spinner";
import Message from './Message';
import CountryItem from './CountryItem';
//import PropTypes from 'prop-types';




function CountryList({cities, isLoading}) {
    if(isLoading) return Spinner;
    if (!cities.length)
    return (
     <Message message="Add your first city by clicking on a city on the map "/>
     )
      
     //Check if array [] contain the current city in a country
     // if not add the current city to that Array
     const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
        return [...arr, { country: city.country, emoji: city.emoji}]
    else return arr;
     }, [])
    return (
        <div>
            <ul className ={styles.countryList}>
               {countries.map(country => <CountryItem country={country} key={country.id} />)}
            </ul>
        </div>
    )

    
}


/*
CityList.propTypes = {
    cities: PropTypes.array.isRequired, // cities should be an array and required
    isLoading: PropTypes.bool.isRequired, // isLoading should be a boolean and required
  };
*/
export default CountryList
