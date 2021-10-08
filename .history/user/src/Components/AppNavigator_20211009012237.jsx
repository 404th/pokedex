import { Link } from "react-router-dom"
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles
} from "@material-ui/core"
import { mergeClasses } from "@material-ui/styles"

const useStyles = makeStyles( theme => ({
    link:{
        textDecoration: "none",
    },
}) )

function AppNavigator() {
    const classes = useStyles()

    return (
        <AppBar className={  }>
            <Toolbar>
                <Link to={"/"}>
                    <Typography>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavigator