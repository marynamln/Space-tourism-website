import '../../App.scss'
import '../../styles/pages/_technology.scss'
import { useState, useRef } from 'react'

function Technology({ item, activeTechnology, setActiveTechnology }) {

    const technologyNames = ['Launch vehicle', 'Spaceport', 'Space capsule'];

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

        const currentIndex = technologyNames.indexOf(activeTechnology);

        if (isLeftSwipe && currentIndex < technologyNames.length - 1) {
            setActiveTechnology(technologyNames[currentIndex + 1]);
        }

        if (isRightSwipe && currentIndex > 0) {
            setActiveTechnology(technologyNames[currentIndex - 1]);
        }
    };

    if (!item) return null;

    return (
        <>
        <div className='tech-item-section'
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
                touchAction: 'pan-y',
                outline: 'none'
            }}
        >
            
            <div className='tech-left-sc'>
                <div className='tech-nav-sc'>
                    {technologyNames.map((technology, index) => (
                        <a key={technology}
                            className={`tech-link ${activeTechnology === technology ? 'active' : ''}`}
                            onClick={() => setActiveTechnology(technology)}
                        >
                            {(index + 1)}
                        </a>
                    ))}
                </div>

                <div className='tech-tx-sc'>
                    <p className='tech-subhead'>The terminology...</p>
                    <p className='tech-title'>{item.name}</p>
                    <p className='tech-description'>{item.description}</p>
                </div>

            </div>

            <div className='tech-img-sc'>
                <picture>
                    <source media="(max-width: 1024px)" srcSet={item.images.landscape} />
                    <img className='tech-img' src={item.images.portrait} alt="Technology" />
                </picture>
            </div>

        </div>
        </>
    )
}

export default Technology;