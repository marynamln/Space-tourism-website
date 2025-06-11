import '../../App.scss'
import '../../styles/pages/_crew.scss'
import { useState, useRef } from 'react'

function Crew({ item, activeCrew, setActiveCrew }) {

    const crewNames = ['Douglas Hurley', 'Mark Shuttleworth', 'Victor Glover', 'Anousheh Ansari'];

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

        const currentIndex = crewNames.indexOf(activeCrew);

        if (isLeftSwipe && currentIndex < crewNames.length - 1) {
            setActiveCrew(crewNames[currentIndex + 1]);
        }

        if (isRightSwipe && currentIndex > 0) {
            setActiveCrew(crewNames[currentIndex - 1]);
        }
    };

    if (!item) return null;

    return (
        <>
        <div className='crew-item-section'
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
                touchAction: 'pan-y',
                outline: 'none'
            }}
        >
            
            <div className='crew-left-sc'>
                <div className='crew-tx-sc'>
                    <p className='crew-role'>{item.role}</p>
                    <p className='crew-title'>{item.name}</p>
                    <p className='crew-pl-tx'>{item.bio}</p>
                </div>

                <div className='crew-nav-sc'>
                    {crewNames.map((crew) => (
                        <a key={crew}
                            className={`crew-link ${activeCrew === crew ? 'active' : ''}`}
                            onClick={() => setActiveCrew(crew)}
                        >
                        </a>
                    ))}
                </div>
            </div>

            <div className='crew-img-sc'>
                <img className='crew-img' src={item.images.webp} />
            </div>
        </div>
        </>
    )
}

export default Crew;