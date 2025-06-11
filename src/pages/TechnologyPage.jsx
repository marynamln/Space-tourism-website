import { useState, useEffect } from 'react'
import '../App.scss'
import '../styles/pages/_technology.scss'
import Technology from '../components/pages/Technology'
import data from '../data.json'

function TechnologyPage() {

    const [technology, setTechnology] = useState([]);
    const [activeTechnology, setActiveTechnology] = useState('');

    useEffect(() => {
        setTechnology(data.technology);
        setActiveTechnology(data.technology[0].name);
    }, []);

    const activeItem = technology.find((item) => item.name === activeTechnology);

    return (
        <>
            <div className='page-main-section'>
                <h5 className='page-title'>03 <p>Space launch 101</p></h5>

                <div className='items-section'>
                    <Technology item={activeItem} activeTechnology={activeTechnology} setActiveTechnology={setActiveTechnology} />
                </div>
            </div>
        
        </>
    )
}

export default TechnologyPage;