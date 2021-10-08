import { Link } from "react-router-dom"
import { AppBar, ToolBar } from "@material-ui/core"

function AppNavigator() {
    return (
        <AppBar>
            <ToolBar>
                <Link to={"/"}>Pokedex</Link>
            </ToolBar>
        </AppBar>
    )
}

export default AppNavigator