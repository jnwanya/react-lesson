import React, { Component } from 'react';
import './App.css';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      {id:'76227378', name: "Justin", age: 29},
      {id:'92923298', name: "Chioma", age: 27},
      {id:'02999491', name: "Uchenna", age: 31}
    ],
    showPersons: false
  };


  nameChangedHandler = (event, id) => {
     const personIndex = this.state.persons.findIndex(p => p.id  === id);
     const person = {...this.state.persons[personIndex]};
     person.name = event.target.value;
     const persons = [...this.state.persons];
     persons[personIndex] = person;
    this.setState({persons: persons});
  };


  togglePersonHandler = () => {
    const newShowPersonState = !this.state.showPersons;
    this.setState({showPersons: newShowPersonState});
  };

  deletePersonHandler = (index) => {
    console.log('delete person called');
    // const persons = this.state.persons.slice();
     const persons = [...this.state.persons];
     persons.splice(index, 1);
     this.setState({persons: persons});
  };

  render() {
   // return React.createElement('div', {className: 'App'},
      //  React.createElement('h1', null, 'This is working'));

     let persons = null;
     let btnClass = '';
     if(this.state.showPersons){
       persons = (
           <div>
             {this.state.persons.map((person, index) => {
               return <ErrorBoundary key={person.id}><Person
                              name={person.name}
                              age={person.age}
                              clicked={() => this.deletePersonHandler(index)}
                              changed={(event) => this.nameChangedHandler(event, person.id)}
               /></ErrorBoundary>
             })}
           </div>
        );
        btnClass = styles.Red;
     }

     let classes = [];
     if(this.state.persons.length <= 2){
         classes.push('red')
     }
      if(this.state.persons.length <= 1){
          classes.push('bold')
      }



    return (
            <div className={styles.App}>
                <h1 className={classes.join(' ')}>Hi, I am Nwanya Justin Tochukwu</h1>
                <p className={styles.colorRed}> Toggle to see all persons </p>
                <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
    );
  }
}

export default App;
