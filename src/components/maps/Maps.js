import { render } from '@testing-library/react'
import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import data from '../../data.json'


const Maps = ({loading}) => {

    const [viewport, setViewport] = useState({
        latitude: 41.0938,
        longitude: -85.0707,
        zoom: 10,
        width: '40vw',
        height: '97%'

    })


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

export default Maps
