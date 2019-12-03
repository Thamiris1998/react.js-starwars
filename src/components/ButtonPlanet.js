import React from 'react';

export default class ButtonPlanet extends React.Component{
    handleClick() {
        fetch('http://localhost:8080/random/planet')
        .then(res => res.json())
        .then((data)=>{
          this.setState({planet: data})
        })
        .catch(console.log)
      }

    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>Next</button>
        )
    }
}