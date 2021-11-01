import { Modal } from 'bootstrap';
import React, { useState } from 'react'
import { Container, Card } from 'react-bootstrap';
import InfoCard from '../infocard/InfoCard';
import Maps from '../maps/Maps';
import ModalCard from '../modal/ModalCard';
import './HoldingContainer.css'
const HoldingContainer = ({ data}) => {
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false)


   
   console.log(loading)
    return (
        <div>
        <p className="main-title"> Found 3 Taco Trucks in 92121</p>

        <div className="display"> 
        <div className="flex">
        {/* <DataFetching loading={loading} setLoading={setLoading} active={active} setActive={setActive} data={data} /> */}

        <InfoCard loading={loading} setLoading={setLoading} active={active} setActive={setActive} data={data}/> 
        <Maps loading={loading} setLoading={setLoading} active={active} setActive={setActive} data={data} />
        
        </div>
        
        </div>

        <div>
    
        </div>
        </div>
    


        

    )
}

export default HoldingContainer
