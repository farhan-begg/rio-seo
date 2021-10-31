import React from 'react'
import data from '../../data.json'
import { Card, Button } from 'react-bootstrap';
import './InfoCard.css'


// AIzaSyAU3SCdAw-WNPmFovg71-4hjNQtujU_PfI


const InfoCard = ({ loading, setLoading }) => {
    const handleDirection = e => {
        e.preventDefault();
        if (!loading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
        console.log("checking loading state", loading)
    }

    const renderCard = data.data.map(item => {
        return (
       
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
           
        )
    }) 



  
    return (

        <Card style={{height: '600px' , width: '380px'}}>
            {renderCard}

        </Card>
    )
}

export default InfoCard
