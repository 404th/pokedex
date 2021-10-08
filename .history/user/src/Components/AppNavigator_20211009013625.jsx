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
        <AppBar className={ classes.appBar } position={"fixed"}>
            <Toolbar>
                <Link className={ classes.link } to={"/"}>
                    <Typography className={ classes.title } variant={"h6"}>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavigator