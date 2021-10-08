import { useEffect } from "react"
import { Box } from "@material-ui/core";
import axios from "axios"

// components
import AppNavigator from "../Components/AppNavigator";

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
                            name: el.namem
                        }

                        console.log( pokeObj )
                    });

                } else {
                    throw Error("API not catch any data! `Pokemon`")
                }
            } )
    },[] )
    
    return <Box>

    </Box>
}

export default Pokedex