import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register } from "./Components/Register/Register";
import { Home } from "./Components/Pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
