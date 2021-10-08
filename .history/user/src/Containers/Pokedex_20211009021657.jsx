import { useEffect, useState } from "react"
import { Box, CircularProgress } from "@material-ui/core";
import axios from "axios"

// config
import { IMAGE_POKE_URL, POKEMON_URL } from "../config"

function Pokedex () {

    const [ appPoks, setAppPoks ] = useState(null)

    useEffect( () => {
        axios.get( `${ POKEMON_URL }?limit=800` )
            .then( res => {
                if ( res.status >= 200 && res.status < 300 ){
                    
                    const { results } = res.data

                    const pokemons = []

                    results.forEach((el, i) => {
                        i++
                        let pokeObj = {
                            id: i,
                            url: `${ IMAGE_POKE_URL }/${ i }.png`,
                            name: el.name,
                        }

                        pokemons.push( pokeObj )
                    });

                    setAppPoks(pokemons)
                } else {
                    throw Error("API not catch any data! `Pokemon`")
                }
            } )
    },[] )
    
    return <Box>
        {
            appPoks ? appPoks.map( (poke, i) => {
                return <h1 key={ poke.url + i*12345 }>{ poke.name }</h1>
            } ) : <CircularProgress style={ { marginTop:"200px" } } />
        }
    </Box>
}

export default Pokedex