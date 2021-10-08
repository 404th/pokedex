import { Link } from "react-router-dom"
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles
} from "@material-ui/core"
import { mergeClasses } from "@material-ui/styles"

const useStyles = makeStyles( theme => ({
    appBar:{
        backgroundColor:"black",
    },
    link:{
        textDecoration: "none",
    },
}) )

function AppNavigator() {
    const classes = useStyles()

    return (
        <AppBar className={ classes.appBar }>
            <Toolbar>
                <Link className={ classes.link } to={"/"}>
                    <Typography>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavigator