import React from 'react';
import './Person.css';
import styles from './Person.module.css';
const person  = (props) => {
    const style = {
       '@media (min-width: 500px)': {
            width: '450px'
       }
    };
    return  (
        <div className="Person" style={style}>
            <p className={styles.colorRed} onClick={props.clicked}>I am a person with name:{props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};
export default person;
