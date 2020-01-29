// create your App component here
import React from 'react'

export default class App extends React.Component{

    state={
        peopleInSpace: []
    }

    componentDidMount=()=>{
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(astro => {
            console.log(astro)
            this.setState({
                peopleInSpace: astro.people
            })
        })
    }

    render(){
        return(
            <div>
               
            </div>
        )
    }

}
