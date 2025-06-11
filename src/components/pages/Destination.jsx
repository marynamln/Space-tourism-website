import '../../App.scss'
import '../../styles/pages/_destination.scss'


function Destination({ item, activePlanet, setActivePlanet }) {

    const planetNames = ['Moon', 'Mars', 'Europa', 'Titan'];

    if (!item) return null;

    return (
        <>
        <div className='destination-item-section'>
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