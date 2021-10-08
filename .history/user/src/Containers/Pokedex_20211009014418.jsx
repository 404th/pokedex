import { useEffect } from "react"
import { Box } from "@material-ui/core";
import axios from "axios"

function Pokedex () {

    useEffect( () => {
        axios.get( "https://pokeapi.co/api/v2/pokemon?limit=800" )
            .then( res => console.log( res ) )
    },[] )
    
    return <Box>
        <AppNavigator />
    </Box>
}

export default Pokedex