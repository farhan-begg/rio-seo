import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../components/infocard/InfoCard.css'
import { Card, Button } from 'react-bootstrap';


const DataFetching = ({loading, setLoading}) => {
    const url = 'https://my.api.mockaroo.com/locations.json?key=a45f1200'
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
    }, [url])

    const handleDirection = e => {
        e.preventDefault();
        if (!loading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
        console.log("checking loading state", loading)
    }

    return (
      <Card className="card-holder">
   
              {data.map(item => (
                     
            <Card className="card-container">
            <div className="group" key={item.id}>
                <div className="display-title-miles">
                 <p className="card-title">{item.name}</p>
                 <p className="card-miles">0.5 miles</p>
                 </div>
                 <p className="card-address">{item.address}</p>
                 <p className="data-city-state">{item.city},<span> {item.state}</span> <span> {item.postal_code}</span></p>
                 <p className="open">Open today until {item.monday_close}</p>
                 <p className="phone-number"><i class="bi bi-telephone"></i> 555-555-5555</p>
            </div>

            <div className="buttons">
                <Button onClick={e => handleDirection(e)}>Directions</Button>

                <Button>More Info</Button>
            </div>
            </Card>
              ))}
         
      </Card>
    )


}

export default DataFetching
