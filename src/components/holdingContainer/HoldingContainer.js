import React, { useState } from 'react'
import { Container, Card } from 'react-bootstrap';
import DataFetching from '../../api/DataFetching';
import InfoCard from '../infocard/InfoCard';
import Maps from '../maps/Maps';
import './HoldingContainer.css'
const HoldingContainer = () => {
    const [loading, setLoading] = useState(false)
   
   console.log(loading)
    return (
        <div>
        <p className="main-title"> Found 3 Taco Trucks in 92121</p>

        <div className="display"> 
        <div className="flex">
        <DataFetching loading={loading} setLoading={setLoading}/>

        {/* <InfoCard loading={loading} setLoading={setLoading} />  */}
        <Maps loading={loading} setLoading={setLoading} />
        </div>
        
        </div>

        <div>
    
        </div>
        </div>
    


        

    )
}

export default HoldingContainer
