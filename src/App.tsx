import React from 'react';
import './App.css';
import Leftpanel from './components/leftpanel.tsx'
import Middle from './components/middle.tsx'
import Rightpanel from './components/rightpanel.tsx'
function App() {
  return (
    <div className="App">
      <Leftpanel/>
      <Middle/>
      <Rightpanel/>
    </div>
  );
}

export default App;
