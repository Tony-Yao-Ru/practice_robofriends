import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import "../containers/App.css";

function App() {
// class App extends Component {
    
    // constructor() {
    //     super();
    //     this.state = {
    //         Robots: [],
    //         searchfield: ''
    //     };
    //     // console.log('constructor');
    // }
    const [Robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')

    const onSearchChange = (event) => {
        // this.setState({searchfield: event.target.value});
        setSearchfield(event.target.value);
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=> response.json())
    //         .then(users => {this.setState({Robots: users})});
    //     // console.log('componentDidMount');
    // }
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response=> response.json())
                .then(users => {setRobots(users)});
        }, [] // This is the key for deciding when to use the useEffect()
    )

    // const {Robots, searchfield} = this.state;
    const filteredRobots = Robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        }
    );
    
    return !Robots.length ? 
        <h1>Loading</h1>:
        (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary> 
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
             </div>
        );
}

export default App;