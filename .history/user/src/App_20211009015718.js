import { BrowserRouter as Router, Route } from "react-router-dom"
import AppNavigator from "./Components/AppNavigator";
// import AppNavigator from "./Components/AppNavigator";
import Pokedex from "./Containers/Pokedex";
// components

function App() {
  return (
    <Router>
        <AppNavigator />
        <Route to="/" component={ Pokedex } exact></Route>
    </Router>
  );
}

export default App;
