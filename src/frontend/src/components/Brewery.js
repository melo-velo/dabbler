import axios from 'axios'
import React, {useEffect, useState} from "react";


const Brewery = () => {
    const url="api/v1/breweries"
    const [brewery, setBrewery] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBrewery(response.data)
                console.log(response.data)
            })
    }, [])

    if(brewery){
        return(
            <div>
                    {brewery.map( (brewery) => (
                        <ul>
                            <li className="brewery-head" key={brewery.id}>{brewery.name}</li>
                            <li>{brewery.location}</li>
                            <li>{brewery.drink}</li>
                            <li>{brewery.title}</li>
                            <li>{brewery.type}</li>
                        </ul>

                        )
                        )
                    }
            </div>
        )
    }

    return (
        <div>
        </div>

  )
}

export default Brewery
