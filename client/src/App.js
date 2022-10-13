// import React, { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
// import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
    <>
      {/* <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Routes>
            <Route path="/">
              <Home user={user}/>
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Routes>
        )}
      </main> */}
      <Home/>
      <SignUp/>
      <Login/>
      <Header/>
    </>
  );
}

export default App;
