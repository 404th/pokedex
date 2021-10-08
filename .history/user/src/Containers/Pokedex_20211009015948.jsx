import { useEffect } from "react"
import { Box } from "@material-ui/core";
import axios from "axios"

import AppNavigator from "../Components/AppNavigator";

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