import React, {useState} from "react";
import fetch from "unfetch";

const Create = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [title, setTitle] = useState('')
    const [type, setType] = useState('IPA')
    const [drink, setDrink] = useState('BEER')
    const [numberOfBeers, setNumberOfBeers] = useState(0)
    const [url, setUrl] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        const brewery = {name, location, title, type, drink, numberOfBeers, url}

        console.log(brewery)

        fetch("api/v1/breweries", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(brewery)
        }).then(()=>{
            console.log('new brewery added')
        })
    }

    return(
        <div className='create' id='create'>
            <h2>Add a brewery</h2>
            <form onSubmit={handleSubmit}>
                <label>Brewery name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />

                <label>Location:</label>
                <input
                    type="text"
                    required
                    value={location}
                    onChange={(e)=> setLocation(e.target.value)}
                />

                <label>Most popular drink:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />

                <label>Drink type:</label>
                <select
                value={type}
                onChange={(e)=> setType(e.target.value)}
                >
                    <option value="IPA">IPA</option>
                    <option value="STOUT">STOUT</option>
                    <option value="SOUR">SOUR</option>
                    <option value="HAZY">HAZY</option>
                    <option value="PILSNER">PILSNER</option>
                    <option value="LAGER">LAGER</option>
                    <option value="PORTER">PORTER</option>
                    <option value="PALE">PALE</option>
                    <option value="BROWN">BROWN</option>
                    <option value="KOLSCH">KOLSCH</option>
                    <option value="SAISON">SAISON</option>
                    <option value="OTHER">OTHER</option>
                </select>

                <label>Known for:</label>
                <select
                    value={drink}
                    onChange={(e)=> setDrink(e.target.value)}
                >
                    <option value="BEER">BEER</option>
                    <option value="KOMBUCHA">KOMBUCHA</option>
                    <option value="SODA">SODA</option>
                    <option value="WATER">WATER</option>
                </select>

                <label>Number of Beers on tap:</label>
                <input
                    type="number"
                    required
                    value={numberOfBeers}
                    onChange={(e)=> setNumberOfBeers(e.target.value)}
                />

                <label>Brewery website URL:</label>
                <input
                    type="text"
                    required
                    value={url}
                    onChange={(e)=> setUrl(e.target.value)}
                />

                <button>Add</button>
            </form>
        </div>
    )
}

export default Create