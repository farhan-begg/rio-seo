
import DataFetching from './api/DataFetching';
import Header from './components/header/Header';
import LocalData from './LocalData';
import HoldingContainer from './components/holdingContainer/HoldingContainer'
function App() {

  return (
    <div className="App">
      {/* <DataFetching /> */}
      <Header />
    <HoldingContainer />
    </div>
  );
}

export default App;
