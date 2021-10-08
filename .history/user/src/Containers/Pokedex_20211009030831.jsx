import { useEffect, useState } from "react"
import { Grid, CircularProgress, makeStyles } from "@material-ui/core";
import axios from "axios"

// config
import { IMAGE_POKE_URL, POKEMON_URL } from "../config"
import PokemonCard from "../Components/PokemonCard";

const useStyles = makeStyles( () => ({
    container:{
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"flex-start",
        boxSizing:"border-box",
        padding:"0 75px"
    },
}) )

function Pokedex () {
    const [ appPoks, setAppPoks ] = useState(null)

    const classes = useStyles()

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
    
    return <Grid className={ classes.container } container spacing={2}>
        {
            appPoks ? appPoks.map( (poke, i) => {
                return (
                    <Grid item key={ poke.url + i*545 }>
                        <PokemonCard poke={poke} />
                    </Grid>
                )
            } ) : <CircularProgress style={ { marginTop:"200px" } } />
        }
    </Grid>
}

export default Pokedex