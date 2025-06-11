import '../../App.scss'
import '../../styles/pages/_crew.scss'


function Crew({ item, activeCrew, setActiveCrew }) {

    const crewNames = ['Douglas Hurley', 'Mark Shuttleworth', 'Victor Glover', 'Anousheh Ansari'];

    if (!item) return null;

    return (
        <>
        <div className='crew-item-section'>
            
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