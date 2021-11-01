import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import './ModalCard.css'

const ModalCard = ({ data }) => {
    const getId =  data.filter(item => item.id)
    console.log("Checking data object id", getId)


    return (

        <Card className="modal-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vtD-1-8W76r9UVfE7lP1fTZ_yV6mniyrxtmgesyAmg02NChfPyKixhkOgHXBxmaYxWs&usqp=CAU" alt="image" />
            <div className="modal-title">
                {/* {data.filter(d => d.id[1] === d.id[1]).map(d => d.name)} */}
           <p>Walter, Nader and Gleichner</p>
                  
            </div>
            <div className="modal-address">
                <p className="mp-address">
                    1234 Clairemont Mesa Blvd
                </p>
                <p className="mp-city">San Diego, CA 92121</p>
            </div>
            <div className="orange">
            <div>
            <i class="bi bi-telephone"></i>
                123-456-7890

            </div>

            <div>
            <i class="bi bi-"></i>
                Get Directions
            </div>
         
            </div>
            <ul >
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
            </ul>
            
        </Card>
    )
        
}

export default ModalCard








// data.filter(item => item.id === )






            {/* {data.filter(item => item.id.map(filteredName => (
                <li>{filteredName}</li>
            )))}







            {/* {data.filter.map(filteredName => (
                <li>
                                {filteredName}
                </li>
            ))} */}

                    {/* {data.filter(item => (
                     
            <Card className="card-container">
            <div className="group" key={item.id}>
                <div className="display-title-miles">
                 <p className="card-title">{item.name}</p>
                 <p className="card-miles">0.5 miles</p>
                 </div>
                 <p className="card-address">{item.address}</p>
                 <p className="data-city-state">{item.city},<span> {item.state}</span> <span> {item.postal_code}</span></p>
                 <p className="phone-number"><i class="bi bi-telephone"></i> 555-555-5555</p>
            </div>

       
            </Card>
              ))} */}