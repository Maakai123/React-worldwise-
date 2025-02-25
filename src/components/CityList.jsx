/* eslint-disable react/prop-types */

import styles from './CityList.module.css'
import Spinner from "./Spinner";
import CityItem from './CityItem';
import Message from './Message';
//import PropTypes from 'prop-types';



function CityList({cities, isLoading}) {
    if(isLoading) return Spinner;
    if (!cities.length)
    return (
     <Message message="Add your first city by clicking on a city on the map "/>
     )
    return (
        <div>
            <ul className ={styles.cityList}>
               {cities.map(city => <CityItem city={city} key={city.id} />)}
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
export default CityList
