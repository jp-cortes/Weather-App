 import React, { useState } from 'react';
 import styles from '../styles/WeatherForm.module.css';

 function WeatherForm({ onChangeCity }) {
    const [city, setCity] = useState("");

    function onChange(e) {
        const value = e.target.value;
        const lowerCase = value.toLowerCase();
        if(lowerCase !== '') {
            setCity(lowerCase);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();

        onChangeCity(city);
        //is call as a function is declared where its parent WeatherApp
    }
    return(
        <form onSubmit={handleSubmit} className={styles.container}>
            <input 
            placeholder='Search Paris,fr or Sofia,bg'
            type='text' onChange={onChange} className={styles.input}/>
        </form>
    )
 }

 export { WeatherForm };