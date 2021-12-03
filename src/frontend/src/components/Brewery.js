import axios from 'axios'
import React, {useEffect, useState} from "react";


const Brewery = () => {
    const url="api/v1/breweries"
    const [brewery, setBrewery] = useState(null)
    // const [fix, setFix] = useState(false)


    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBrewery(response.data)
                console.log(response.data)
            })
    }, [])


    if(brewery){
        return(
            <>
            <div className='brewery-description-container'>
                <p className='brewery-description-text'>Minnesota's top breweries of 2021</p>
            </div>
            <div className="brewery-grid" id='rankings'>
                    {brewery.map( (brewery) =>
                        <div className="brewery-container">
                            <a href={brewery.url} className='brewery-link' target='_blank'>
                            <h1 className="brewery-rank">{brewery.id}</h1>
                            <h3 className="brewery-head" key={brewery.id}>{brewery.name}</h3>
                            <h3>Location: {brewery.location}</h3>
                            <h3>Most popular: {brewery.title}</h3>
                            <h3>Drink type: {brewery.type}</h3>
                            <h3>Known for: {brewery.drink}</h3>
                            <h3>Beers on tap: {brewery.numberOfBeers}</h3>
                            </a>
                        </div>
                        )
                    }
            </div>
            </>
        )
    }

    return (
        <div>
        </div>

  )
}

export default Brewery
