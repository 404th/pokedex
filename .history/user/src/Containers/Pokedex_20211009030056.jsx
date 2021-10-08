import { useEffect, useState } from "react"
import { Box, CircularProgress } from "@material-ui/core";
import axios from "axios"

// config
import { IMAGE_POKE_URL, POKEMON_URL } from "../config"
import PokemonCard from "../Components/PokemonCard";

function Pokedex () {

    const [ appPoks, setAppPoks ] = useState(null)

    useEffect( () => {
        axios.get( `${ POKEMON_URL }?limit=8` )
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
                return (
                    <PokemonCard poke={poke} key={ poke.url + i*545 }/>
                )
            } ) : <CircularProgress style={ { marginTop:"200px" } } />
        }
    </Box>
}

export default Pokedex