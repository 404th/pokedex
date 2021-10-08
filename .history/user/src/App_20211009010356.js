import { BrowserRouter as Router } from "react-router-dom"
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
