import React from 'react'
import data from '../../data.json'
import { Card, Button } from 'react-bootstrap';
import './InfoCard.css'


// AIzaSyAU3SCdAw-WNPmFovg71-4hjNQtujU_PfI
const InfoCard = () => {
    return (
        <Card className="card-container">
            <div className="group">
                <p className="card-title">{data.name}</p>
                <p className="card-miles">0.5 miles</p>

            </div>

            <p className="card-address">{data.address}</p>
            <p className="data-city-state">{data.city},<span> {data.state}</span> <span> {data.postal_code}</span></p>
            <p className="open">Open today until {data.monday_close}</p>
            <p className="phone-number"><i class="bi bi-telephone"></i> 555-555-5555</p>

            <div className="buttons">
                <Button>Directions</Button>
                <Button>More Info</Button>
            </div>
        </Card>
    )
}

export default InfoCard
