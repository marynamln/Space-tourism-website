import '../../App.scss'
import '../../styles/pages/_technology.scss'


function Technology({ item, activeTechnology, setActiveTechnology }) {

    const technologyNames = ['Launch vehicle', 'Spaceport', 'Space capsule'];

    if (!item) return null;

    return (
        <>
        <div className='tech-item-section'>
            
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