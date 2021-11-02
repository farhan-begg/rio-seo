import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import './ModalCard.css'
import { AiFillCar } from "react-icons/ai";


const ModalCard = ({ data, selectedCard, setActive }) => {
    const getId =  data.filter(item => item.id)
    console.log("Checking data object id", getId)


    return (

        <Card className="modal-card">
            <div  onClick={()=> setActive(false)} style={{display: "flex",justifyContent: 'flex-end', paddingBottom: "5px", cursor: 'pointer'}}>x</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vtD-1-8W76r9UVfE7lP1fTZ_yV6mniyrxtmgesyAmg02NChfPyKixhkOgHXBxmaYxWs&usqp=CAU" alt="image" />
            <div className="modal-title">
                {/* {data.filter(d => d.id[1] === d.id[1]).map(d => d.name)} */}
                { selectedCard && selectedCard.name || ""}
                  
            </div>
            <div className="modal-address">
                <p className="mp-address">
                    { selectedCard && selectedCard.address || ""}
                </p>
                <p className="mp-city">    { selectedCard && selectedCard.city|| ""},     { selectedCard && selectedCard.state|| ""} { selectedCard && selectedCard.postal_code|| ""} </p>
            </div>
            <div className="orange">
            <div className="orange-icon">
            <i class="bi bi-telephone"></i>
           
                123-456-7890
             
            </div>

            <div className="orange-icon">
            <AiFillCar  className="logo" size={21} />
      
                Get Directions
             
            </div>
         
            </div>
            <ul >
                <li>Monday           { selectedCard && selectedCard.monday_open || "loading"}-{ selectedCard && selectedCard.monday_close|| "loading"}</li>
                <li>Tuesday { selectedCard && selectedCard.tuesday_open || "loading"}-{ selectedCard && selectedCard.tuesday_close|| "loading"}</li>
                <li>Wednesday { selectedCard && selectedCard.wednesday_open || "loading"}-{ selectedCard && selectedCard.wednesday_close|| "loading"}</li>
                <li>Thursday { selectedCard && selectedCard.thursday_open || "loading"}-{ selectedCard && selectedCard.thursday_close|| "loading"}</li>
                <li>Friday { selectedCard && selectedCard.friday_open || "loading"}-{ selectedCard && selectedCard.friday_close|| "loading"}</li>
                <li>Saturday { selectedCard && selectedCard.saturday_open || "loading"}-{ selectedCard && selectedCard.saturday_close|| "loading"}</li>

                <li>Sunday { selectedCard && selectedCard.sunday_open || "loading"}-{ selectedCard && selectedCard.sunday_close|| "loading"}</li>


            </ul>
            <Button className="modal-button" onClick={()=> setActive(false)}>View Full Details</Button>
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