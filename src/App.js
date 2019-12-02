import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createResource } from "./PersonApi";
import { Person } from "./Person";
import { Number } from "./Number";

const resource = createResource();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Number resource={resource} />
          <Person resource={resource} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
