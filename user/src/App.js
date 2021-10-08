import { BrowserRouter as Router, Route } from "react-router-dom"
// components
import Pokedex from "./Containers/Pokedex";
import AppNavigator from "./Components/AppNavigator";

function App() {
  return (
    <Router>
        <AppNavigator />
        <Route to="/" component={ Pokedex } exact></Route>
    </Router>
  );
}

export default App;
