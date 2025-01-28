import React, { useState} from "react";
import "./App.css";
import Leftpanel from "./components/leftpanel.tsx";
import Middle from "./components/middle.tsx";
import Rightpanel from "./components/rightpanel.tsx";
import Landingpage from "./landingPage.tsx";
function App() {
  const [start, setStart] = useState(false);
  const startOver = (e: boolean) => {
    setStart(e);
    console.log('e',e)
  };
  return (
    <div className="App">
      {!start ? (
        <Landingpage canStart={startOver} />
      ) : (
        <>
          <Leftpanel />
          <Middle />
          <Rightpanel />
        </>
      )}
    </div>
  );
}

export default App;
