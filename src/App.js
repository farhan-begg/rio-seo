
import DataFetching from './api/DataFetching';
import React from 'react';
import Header from './components/header/Header';
import HoldingContainer from './components/holdingContainer/HoldingContainer'
function App() {

  return (
    <div className="App">
       <Header />
    <HoldingContainer /> 
    </div>
  );
}

export default App;
