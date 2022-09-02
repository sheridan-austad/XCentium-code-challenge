import { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState();

  // setting up the initial data for the user - show user info when logged in
  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) r.json().then((data) => setUser(data));
    });
  }, [setUser]);

  // if the user is not logged in redirect to the login page
  if (!user) return <Login onLogin={setUser} />;

  return (
    // setting up the navbar and the home page for when the user logs in
    <>
      <NavBar setUser={setUser} />
      <Home user={user} />
    </>
  );
}

export default App;
