import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import InfoCard from '../infocard/InfoCard';
import Maps from '../maps/Maps';
import ModalCard from '../modal/ModalCard';
import './HoldingContainer.css'

const HoldingContainer = ({ data, viewPort }) => {
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(false)
  const [selectedObj, setSelectedObj] = useState(null);
  const [displayCard, setDisplayCard] = useState(true)
  const [displayMap, setDisplayMap] = useState(false)

  const [isMobile, setMobile] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setMobile(window.innerWidth < 800);
  };

  const handleChangeCard = obj => {
    setSelectedObj(obj);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);

  });

  const toggleMap = () => {
    setDisplayMap(true)
    if (displayMap) {
      setDisplayCard(false)
      return setDisplayMap
    }
  }

  return (
    <div>

      {isMobile ? (
        <div>
          {displayCard &&
            <InfoCard style={{ width: "600px", marginleft: 'auto', marginRight: 'auto' }}
              loading={loading}
              setLoading={setLoading}
              active={active}
              setActive={setActive}
              data={data}
              onSelectCard={handleChangeCard} />}
          {!displayCard & displayMap &&
            <Maps
              className="map"
              loading={loading}
              setLoading={setLoading}
              active={active}
              setActive={setActive}
              data={data}
              selectedCard={selectedObj}
            />}
          <div className="button-holder">
            <Button className="bottom-tab" onClick={() => {
              setDisplayCard(true)
            }}>Info</Button>
            <Button className="bottom-tab" onClick={
              toggleMap
            }>Map</Button>
          </div>
        </div>

      ) : (
        <div>
          <p className="main-title"> Found 3 Taco Trucks in 92121</p>
          <div className="display">
            <div className="flex">
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
