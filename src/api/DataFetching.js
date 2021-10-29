import React, { useEffect, useState } from 'react'
import axios from 'axios'
import data from '../data.json'

const DataFetching = () => {
    const url = 'https://my-json-server.typicode.com/typicode/demo/posts'
    // 'https://my.api.mockaroo.com/locations.json?key=a45f1200'
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
    }, url)

    return (
      <div>
          <ul>
              {data.map(item => (
                  <li key={item.id}>{item.title}</li>
              ))}
          </ul>
      </div>
    )


}

export default DataFetching
