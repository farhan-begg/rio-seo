import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import ModalCard from '../modal/ModalCard'
import { Card, Button } from 'react-bootstrap';
import './Map.css'
const Maps = ({ loading, active, data, selectedCard, setActive }) => {

    const [viewport, setViewport] = useState({
        latitude: selectedCard && selectedCard.latitude || 0,
        longitude: selectedCard && selectedCard.longitude || 0,
        zoom: 4,
        width: '350px',
        height: '98.4%'
    })
    const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
    c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
    C20.1,15.8,20.2,15.8,20.2,15.7z`;

    const SIZE = 20;
    console.log("map", data)
    if (!loading && !active) {
        return <div>
            <Card className="grey">
                <div>
                    <h1>Click a location card to load map</h1>
                </div>
            </Card>
        </div>
    }

    if (active) {
        return (
            <div>
                <div>
                    {active && selectedCard &&
                        <div > <ModalCard data={data} selectedCard={selectedCard} setActive={setActive} /></div>
                    }
                </div>
            </div>
        )
    }

    if (loading) {
        return (
            <div>
                {loading &&
                    <ReactMapGL {...viewport}
                        mapboxApiAccessToken="pk.eyJ1IjoiZmFyaGFuMjciLCJhIjoiY2t2ZDNjN3UzYjM3dDJwbnpuNGMycWgzaiJ9.KZOuTWfFf6j0lumDx-fsew"
                        onViewportChange={viewport => {
                            setViewport(viewport);
                        }}
                        mapStyle="mapbox://styles/farhan27/ckvd49kfy080b14m4r9ae0jpk"
                    >
                        <Marker longitude={selectedCard && selectedCard.longitude || 0} latitude={selectedCard && selectedCard.latitude || 0}>
                            <svg
                                height={SIZE}
                                viewBox="0 0 24 24"
                                style={{
                                    cursor: 'pointer',
                                    fill: '#d00',
                                    stroke: 'none',
                                    transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                                }}
                            >
                                <path d={ICON} />
                            </svg>
                        </Marker>
                    </ReactMapGL>
                }
            </div>
        )
    }
}

export default Maps
