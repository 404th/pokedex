//
import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles( theme => ({
    grid: {
        width:"200px",
    },
}) )

function PokemonCard (props) {
    const classes = useStyles()

    return (
        <Grid className={ classes.grid } container spacing={2}>
            <Grid item>
                <Typography>{ props.name }</Typography>
            </Grid>
            <Grid item>
                <Typography>{ props.url }</Typography>
            </Grid>
            <Grid item>
                <Typography>{ props.id }</Typography>
            </Grid>
        </Grid>
    );
};

export default PokemonCard;