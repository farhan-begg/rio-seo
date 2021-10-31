import { render } from '@testing-library/react'
import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import ModalCard from '../modal/ModalCard'
import { Card, Button } from 'react-bootstrap';
import './Map.css'

const Maps = ({ loading, active, data }) => {

    const [viewport, setViewport] = useState({
        latitude: 41.0938,
        longitude: -85.0707,
        zoom: 10,
        width: '40vw',
        height: '98.4%'
    })

    console.log("map", data)
    if (!loading && !active) {
        return <div>
            <Card className="grey">
                <div>
                    <h1>Click Details</h1>
                </div>
            </Card>
        </div>
    }

    if (active) {
        return (
            <div>
                <div>
                    {active &&
                        <div > <ModalCard data={data} /></div>
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
                    </ReactMapGL>
                }
            </div>
        )
    }
}

export default Maps
