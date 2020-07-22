import React from 'react'
import CardList from './CardList'
import { monsters } from './monsters'
import SearchBox from './SearchBox'
import './App.css'

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            monsters: monsters,
            searchfield: ''
        }    
    }

    onSearchChange = (event) => {
        this.setState( {searchfield: event.target.value} )
    }

    render(){
        const filteredMonsters = this.state.monsters.filter(monster =>{
            return monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return(
            <div className='tc'>
                <h1 className = 'f1'>Monster Grid</h1>
                <SearchBox searchChange={this.onSearchChange}></SearchBox>
                <CardList monsters={filteredMonsters}></CardList>
            </div>
        )
    }
}

export default App;