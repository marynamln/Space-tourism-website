import { useState, useEffect } from 'react'
import '../App.scss'
import '../styles/pages/_crew.scss'
import Crew from '../components/pages/Crew'
import data from '../data.json'

function CrewPage() {

    const [crew, setCrew] = useState([]);
    const [activeCrew, setActiveCrew] = useState('');

    useEffect(() => {
        setCrew(data.crew);
        setActiveCrew(data.crew[0].name);
    }, []);

    const activeItem = crew.find((item) => item.name === activeCrew);

    return (
        <>
            <div className='page-main-section'>
                <h5 className='page-title'>02 <p>Meet your crew</p></h5>

                <div className='items-section'>
                    <Crew item={activeItem} activeCrew={activeCrew} setActiveCrew={setActiveCrew} />
                </div>
            </div>
        
        </>
    )
}

export default CrewPage;