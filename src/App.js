
import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import HoldingContainer from './components/holdingContainer/HoldingContainer'
import axios from 'axios'
function App() {

   
  const url = 'https://my.api.mockaroo.com/locations.json?key=a45f1200'
  const [data, setData] = useState([])
 
  
  useEffect(() => {
      axios.get(url)
          .then(res => {
              console.log(res)
              setData(res.data)

          })
          .catch(err => {
              console.log(err)
          })
  }, [url])


  return (
    <div className="App">
       <Header />
    <HoldingContainer data={data} /> 
   
    </div>
  );
}

export default App;
