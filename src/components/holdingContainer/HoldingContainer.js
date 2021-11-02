import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import InfoCard from '../infocard/InfoCard';
import Maps from '../maps/Maps';
import ModalCard from '../modal/ModalCard';
import './HoldingContainer.css'

const HoldingContainer = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(false)
  const [selectedObj, setSelectedObj] = useState(null);
  const [displayCard, setDisplayCard] = useState("Info")
  const [displayMap, setDisplayMap] = useState("Map")

  const [isMobile, setMobile] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setMobile(window.innerWidth < 800);
  };



  console.log(loading)

  const handleChangeCard = obj => {
    console.log("XXX: ", obj);
    setSelectedObj(obj);
  }


  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);

  });

  return (
    <div>


      {isMobile ? (
        <div>
          <InfoCard style={{width: "600px", marginleft: 'auto', marginRight: 'auto'}}

            loading={loading}
            setLoading={setLoading}
            active={active}
            setActive={setActive}
            data={data}
            onSelectCard={handleChangeCard} />

            
    
    


        <div className="button-holder">
          <Button className="bottom-tab" onClick={() => {
            setDisplayCard()
          }}>Info</Button>
             <Button className="bottom-tab" onClick={() => {
            setDisplayMap()
          }}>Map</Button>
   </div>
        </div>

      ) : (


        <div>

          <p className="main-title"> Found 3 Taco Trucks in 92121</p>

          <div className="display">
            <div className="flex">
              {/* <DataFetching loading={loading} setLoading={setLoading} active={active} setActive={setActive} data={data} /> */}

              <InfoCard

                loading={loading}
                setLoading={setLoading}
                active={active}
                setActive={setActive}
                data={data}
                onSelectCard={handleChangeCard} />
              <Maps
                className="map"
                loading={loading}
                setLoading={setLoading}
                active={active}
                setActive={setActive}
                data={data}
                selectedCard={selectedObj} />

            </div>

          </div>

          <div>

          </div>
        </div>
      )}
    </div>





  )
}

export default HoldingContainer
