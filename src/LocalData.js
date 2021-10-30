import React from 'react'
import data from './data.json'

import {  Container } from 'react-bootstrap';
const LocalData = () => {
    return (
        <Container>
            <h1>{data.name}</h1>
           
           
        </Container>
    )
}

export default LocalData
