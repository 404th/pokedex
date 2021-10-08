import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

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