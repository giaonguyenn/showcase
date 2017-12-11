import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

	constructor () {
		super();
		this.state = {
			evenArray: [],
			oddArray: [],
			userInput: ''
		}
	}

	handleChange(val) {
		this.setState ({ userInput: val });
	}

	sortEvenAndOdd(str) {
    	var evenArray = [];
    	var oddArray = [];
		var array = JSON.parse('[' + str + ']');
		for(var i=0; i<array.length; i++) {
		  if(array[i] % 2 === 0) {
		    evenArray.push(array[i]);
		  } else oddArray.push(array[i]);
		}
		
		this.setState({ evenArray: evenArray, oddArray: oddArray });
	}

	render() {
		return (
			<div className="puzzleBox evenAndOddPB">
				<h4> Evens and Odds </h4>
				<input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
				<button className="confirmationButton" onClick={ () => this.sortEvenAndOdd(this.state.userInput) }>Split</button>
				<span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
				<span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
			</div>
		)
	}
}