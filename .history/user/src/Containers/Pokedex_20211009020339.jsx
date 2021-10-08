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
        axios.get( "https://pokeapi.co/api/v2/pokemon?limit=800" )
            .then( res => {
                if ( res.request >= 200 && res.request < 300 ){
                    setAppPoks(res.results)
                } else {
                    throw Error("API not catch any data! `Pokemon`")
                }
            } )
    },[] )
    
    return <Box>

    </Box>
}

export default Pokedex