import React from "react";
import { BrowserRouter } from "react-router-dom";
import ClientRouter from "./ClientRouter";

function App() {
  return (
    <BrowserRouter>
      <ClientRouter />
    </BrowserRouter>
  );
}

export default App;
