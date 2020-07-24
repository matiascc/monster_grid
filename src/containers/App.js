import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll"
import ErrorBoundry from "./ErrorBoundry"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchfield: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const { monsters, searchfield } = this.state;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name
                .toLowerCase()
                .includes(searchfield.toLowerCase());
        });

        return (
            <div className="tc">
                <h1 className="f1">Monster Grid</h1>
                <SearchBox searchChange={this.onSearchChange}></SearchBox>
                <Scroll>
                    <ErrorBoundry>
                        <CardList monsters={filteredMonsters}></CardList>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );  
    }
}

export default App;
