//
import { Grid,  } from "@material-ui/core"

function PokemonCard (props) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Item>{ props.name }</Item>
            </Grid>
            <Grid item>
                <Item>{ props.url }</Item>
            </Grid>
            <Grid item>
                <Typography>{ props.name }</Typography>
            </Grid>
        </Grid>
    );
};

export default PokemonCard;