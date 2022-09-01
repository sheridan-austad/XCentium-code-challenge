import { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    fetch('/api/me').then((r) => {
      if (r.ok) 
      r.json().then((data) => setUser(data))
    })
  }, [setUser])

  if (!user) return <Login onLogin={setUser} />

	return (
	<>
    <NavBar setUser={setUser} />
    <Home user={user} /> 
  </>
	);
}

export default App;