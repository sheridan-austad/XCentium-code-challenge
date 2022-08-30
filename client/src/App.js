import "./App.css";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Switch, Router, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import Home from "./components/Home";
import { UserContext } from "./components/data/context";

function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setUser(data.user);
          });
        } else {
          r.json().then((error) => console.log(error.error));
        }
      })
      .catch((err) => console.log(err));
  }, [setUser]);

  return (
    <div className="App">
      <h1> Hello world!</h1>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
