import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
// import CommodityCard from "../pages/CommodityCard";
import CommodityForm from "../pages/CommodityForm"
import CommodityList from "../pages/CommodityList";
// import BidderForm from "../pages/BidderForm";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <CommodityForm user={user} />
          </Route>
          <Route path="/">
            <CommodityList />
          </Route>
        </Switch>
      </main>
    {/* <CommodityCard/> */}
    {/* <CommodityList/> */}
    {/* <CommodityForm/>
    <BidderForm/> */}
      
      
    </>
  );
}

export default App;
