import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';

const ModalCard = ({data}) => {
    return (
        <Card>
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

       
            </Card>
              ))}
              </Card>
    )
}

export default ModalCard
