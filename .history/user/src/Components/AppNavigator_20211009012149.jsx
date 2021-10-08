import { Link } from "react-router-dom"
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles
} from "@material-ui/core"

const useStyles = makeStyles( theme => ({
    link:{
        textDecoration: "none",
    },
}) )

function AppNavigator() {
    return (
        <AppBar>
            <Toolbar>
                <Link to={"/"}>
                    <Typography>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavigator