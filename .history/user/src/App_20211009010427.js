import { BrowserRouter as Router, Route } from "react-router-dom"
import AppNavigator from "./Components/AppNavigator";
// components

function App() {
  return (
    <Router>
        <Route to="/" component={ AppNavigator }></Route>
    </Router>
  );
}

export default App;
