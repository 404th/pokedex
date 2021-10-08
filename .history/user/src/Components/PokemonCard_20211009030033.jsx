//
import {
    CardActions,
    Card,
    CardMedia,
    CardContent,
    Button,
    Typography,
    makeStyles,
} from "@material-ui/core"

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