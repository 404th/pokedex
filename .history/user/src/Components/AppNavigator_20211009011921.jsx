import { Link } from "react-router-dom"
import { AppBar, ToolBar } from "@material-ui/core"

function AppNavigator() {
    return (
        <AppBar>
            <ToolBar>
                <Link to={"/"}>
                    <Typography>Pokedex</Typography>
                </Link>
            </ToolBar>
        </AppBar>
    )
}

export default AppNavigator