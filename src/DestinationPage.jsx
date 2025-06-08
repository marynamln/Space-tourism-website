import { useState, useEffect } from 'react'
import './App.scss'
import './styles/pages/_destination.scss'
import Destination from './Destination'
import data from './data.json'

function DestinationPage() {

    const [destinations, setDestinations] = useState([]);
    const [activePlanet, setActivePlanet] = useState('');

    useEffect(() => {
        setDestinations(data.destinations);
        setActivePlanet(data.destinations[0].name);
    }, []);

    const activeItem = destinations.find((item) => item.name === activePlanet);

    return (
        <>
            <div className='destination-main-section'>
                <h5 className='destination-title'>01 <p>Pick your destination</p></h5>

                <div className='destination-items-section'>
                    <Destination item={activeItem} activePlanet={activePlanet} setActivePlanet={setActivePlanet} />
                </div>
            </div>
        
        </>
    )
}

export default DestinationPage;