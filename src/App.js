import React, { useState } from "react";
import { useRoutes } from "react-router-dom";

import Home from "./Screens/Home";

function App() {
  let element = useRoutes([{ path: "/", element: <Home /> }]);

  return <div className="App">{element}</div>;
}

export default App;
