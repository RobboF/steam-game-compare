import React, { Component } from 'react';
import SearchBar from './components/searchBar/searchBar'
import NavBar from './components/navBar/navBar'
import './App.css';

const apiKey = "E45637E592AEE0579E4B24A67DBCA1EB"

class App extends Component {
constructor(props){
    super(props);
    this.state = {
        username: ""
        }
    }


searchSteam = (username) => {
    
    
    fetch(` http://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&vanityurl=${username}&format=json`, {
    method: 'GET',
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(data => console.log('data returned: ', data))    
}

  render () {
      return(
        <div className="helvetica">
            <NavBar />
            <SearchBar searchSteam={this.searchSteam}/>
        </div>
    )
  }
}

export default App;


