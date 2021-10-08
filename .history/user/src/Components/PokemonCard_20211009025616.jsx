//
import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles( theme => ({
    grid: {
        width:"200px",
        backgroundColor:"white",
        borderRadius:"5px",
        boxShadow:"0 0 3px 6px #cecece",
        boxSizing:"border-box",
    },
}) )

function PokemonCard (props) {
    const classes = useStyles()

    console.log( props.poke )

    return (
        <Grid className={ classes.grid } container spacing={2}>
            <Grid item>
                <Typography>{ props.poke.name }</Typography>
            </Grid>
            <Grid item>
                <Typography>{ props.poke.url }</Typography>
            </Grid>
            <Grid item>
                <Typography>{ props.poke.id }</Typography>
            </Grid>
        </Grid>
    );
};

export default PokemonCard;