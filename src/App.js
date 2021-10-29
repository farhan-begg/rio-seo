
import DataFetching from './api/DataFetching';
import Header from './components/Header';
import LocalData from './LocalData';
import {  Container } from 'react-bootstrap';
function App() {

  return (
    <div className="App">
      {/* <DataFetching /> */}
      <Header />
      <LocalData />
    </div>
  );
}

export default App;
