import React, {useState} from "react";

const Create = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [mostPopular, setMostPopular] = useState('')
    const [type, setType] = useState('IPA')
    const [known, setKnown] = useState('BEER')
    const [numberOfBeers, setNumberOfBeers] = useState(0)
    const [url, setUrl] = useState('')

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     const brewery = {name, location, drink, type, known, numberOfBeers, url}
    // }

    return(
        <div className='create'>
            <h2>Add a brewery</h2>
            <form >
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
                    value={mostPopular}
                    onChange={(e)=> setMostPopular(e.target.value)}
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
                    value={known}
                    onChange={(e)=> setKnown(e.target.value)}
                >
                    <option value="BEER">BEER</option>
                    <option value="STOUT">STOUT</option>
                    <option value="SOUR">SOUR</option>
                    <option value="HAZY">HAZY</option>
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