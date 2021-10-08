//
import { Grid, Typography } from "@material-ui/core"

function PokemonCard (props) {
    return (
        <Grid container spacing={2}>
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