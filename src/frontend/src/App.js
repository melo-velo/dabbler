import {getAllBreweries } from "./client";
import './App.css';

function App() {
    getAllBreweries()
        .then(res => res.json())
        .then(console.log)
    return "Dabbler";
}

export default App;
