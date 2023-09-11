import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import SearchBox from "../components/SearchBox";
import "../containers/App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            Robots: [],
            searchfield: ''
        };
        // console.log('constructor');
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({Robots: users})});
        // console.log('componentDidMount');
    }

    render() {
        const {Robots, searchfield} = this.state;
        const filteredRobots = Robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            }
        );
        // console.log('render');
        return !Robots.length ? 
            <h1>Loading</h1>:
            (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;