import React from "react";
// import "./App.css";
import { Viewer } from "@mescius/activereportsjs-react";

function App() {
  return (
    <div id="viewer-host">
      <Viewer report={{ Uri: 'Cities.rdlx-json' }} />
    </div>
  );
}

export default App;