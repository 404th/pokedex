import { useEffect } from "react"
import { Box } from "@material-ui/core";
import axios from "axios"

import AppNavigator from "../Components/AppNavigator";

function Pokedex () {

    useEffect( () => {
        axios.get( "https://pokeapi.co/api/v2/pokemon?limit=800" )
            .then( res => console.log( res.data.results ) )
    },[] )
    
    return <Box>
        
    </Box>
}

export default Pokedex