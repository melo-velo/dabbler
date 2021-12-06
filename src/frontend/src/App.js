import './App.css';
import Brewery from "./components/Brewery";
import Hero from "./components/Hero";
import Create from "./components/Create";
import About from "./components/About";

function App() {
    return(
        <div>
            <Hero />
            <Brewery />
            <Create />
            <About />
        </div>
    )
}

export default App;
