import "./App.css";
import LoginForm from "./components/LoginForm";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import { UserContext } from "./components/data/context";

function App() {
  const [user, setUser] = useState(null);
  // const { setUser } = useContext(UserContext);
  console.log("The user is working");

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setUser(data.user);
          });
          console.log("the if statement is correct");
        } else {
          r.json().then((error) => console.log(error.error));
          console.log("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  }, [setUser]);

  return (
    <div className="App">
      {/* <h1> Hello world!</h1> */}
      <NavBar setUser={setUser} />

      <Home user={user}/>
    </div>
  );
}

export default App;
