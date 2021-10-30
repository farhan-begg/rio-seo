import React from 'react'
import { Container, Card } from 'react-bootstrap';
import InfoCard from '../infocard/InfoCard';
import './HoldingContainer.css'
const HoldingContainer = () => {
    return (
        <Container>
         <p className="font-weight-light"> Found 3 Taco Trucks in 92121</p>
         <Card >
        <InfoCard/>

        </Card>
        
        </Container>
        

    )
}

export default HoldingContainer
