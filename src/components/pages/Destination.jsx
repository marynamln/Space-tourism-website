import '../../App.scss'
import '../../styles/pages/_destination.scss'
import { useState, useRef } from 'react'

function Destination({ item, activePlanet, setActivePlanet }) {

    const planetNames = ['Moon', 'Mars', 'Europa', 'Titan'];

    const [touchStart, setTouchStart] = useState(0);
        const [touchEnd, setTouchEnd] = useState(0);
        const containerRef = useRef(null);
    
        const minSwipeDistance = 50;
    
        const handleTouchStart = (e) => {
            setTouchEnd(0);
            setTouchStart(e.targetTouches[0].clientX);
        };
    
        const handleTouchMove = (e) => {
            setTouchEnd(e.targetTouches[0].clientX);
        };
    
        const handleTouchEnd = () => {
            if (!touchStart || !touchEnd) return;
            
            const distance = touchStart - touchEnd;
            const isLeftSwipe = distance > minSwipeDistance;
            const isRightSwipe = distance < -minSwipeDistance;
    
            const currentIndex = planetNames.indexOf(activePlanet);
    
            if (isLeftSwipe && currentIndex < planetNames.length - 1) {
                setActivePlanet(planetNames[currentIndex + 1]);
            }
    
            if (isRightSwipe && currentIndex > 0) {
                setActivePlanet(planetNames[currentIndex - 1]);
            }
        };

    if (!item) return null;

    return (
        <>
        <div className='destination-item-section'
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
                touchAction: 'pan-y',
                outline: 'none'
            }}
        >
            <div className='dest-img-sc'>
                <img className='planet-img' src={item.images.webp} />
            </div>
            
            <div className='dest-tx-sc'>
                <div className='dest-nav-sc'>
                    {planetNames.map((planet) => (
                        <a key={planet}
                            className={`dest-link ${activePlanet === planet ? 'active' : ''}`}
                            onClick={() => setActivePlanet(planet)}
                        >
                        {planet}
                        </a>
                    ))}
                </div>

                <h1 className='dest-title'>{item.name}</h1>
                <p className='dest-pl-tx'>{item.description}</p>
                <div className='dest-line'></div>
                <div className='dest-info'>
                    <div className='info-item'>
                        <p className='info-title'>Avg. distance</p>
                        <p className='info-data'>{item.distance}</p>
                    </div>

                    <div className='info-item'>
                        <p className='info-title'>Est. travel time</p>
                        <p className='info-data'>{item.travel}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Destination;