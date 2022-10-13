// import React, { useEffect, useState } from "react";
// import { Router, Route } from "react-router-dom";
// import NavBar from "./NavBar";
// import Login from "../pages/Login";
import CommodityCard from "../pages/CommodityCard";

import CommodityList from "../pages/CommodityList";

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

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {/* <NavBar user={user} setUser={setUser} />
      <main>
        <Router>
          <Route path="/new">
            <CommodityForm user={user} />
          </Route>
          <Route path="/">
            <CommodityCard />
          </Route>
        </Router>
      </main> */}
      <CommodityCard/>
      
      <CommodityList/>
    </>
  );
}

export default App;
