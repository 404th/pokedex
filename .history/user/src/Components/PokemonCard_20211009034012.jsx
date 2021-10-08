//
import {
    CardActions,
    Card,
    CardMedia,
    CardContent,
    Button,
    Typography,
} from "@material-ui/core"

function PokemonCard (props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={ props.poke.url }
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { props.poke.name }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default PokemonCard;