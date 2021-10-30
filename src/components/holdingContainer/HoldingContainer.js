import React from 'react'
import { Container, Card } from 'react-bootstrap';
import InfoCard from '../infocard/InfoCard';
import Maps from '../maps/Maps';
import './HoldingContainer.css'
const HoldingContainer = () => {
    return (
        <div>
        <p className="main-title"> Found 3 Taco Trucks in 92121</p>
     

        

        <Card className="display"> 
        <div className="flex">
        <InfoCard/>
        <Maps />
        </div>
        
        </Card>

        <div>
    
        </div>
        </div>
    


        

    )
}

export default HoldingContainer
