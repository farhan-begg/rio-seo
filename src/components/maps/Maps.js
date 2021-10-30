import React, {useState} from 'react'
import ReactMapGL, { Marker} from 'react-map-gl'
import data from '../../data.json'


const Maps = () => {

    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 10,
        width: '30vw',
        height: '70vh'

    })


    return (
        <ReactMapGL {...viewport} 
        mapboxApiAccessToken="pk.eyJ1IjoiZmFyaGFuMjciLCJhIjoiY2t2ZDNjN3UzYjM3dDJwbnpuNGMycWgzaiJ9.KZOuTWfFf6j0lumDx-fsew"
        onViewportChange={viewport => {
            setViewport(viewport);
        }}
        mapStyle="mapbox://styles/farhan27/ckvd49kfy080b14m4r9ae0jpk"
        >
        


           
        </ReactMapGL>
    )
}

export default Maps
