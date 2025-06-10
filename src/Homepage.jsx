import { useNavigate } from 'react-router-dom';
import './App.scss'
import './styles/pages/_home.scss'

function Homepage() {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/destination');
  };

  return (
    <>      
      <div className='homepage-main-section'>
        <div className='mn-sc-left'>
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p className='hp-text'>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className='mn-sc-right'>
          <button className='explore-btn' onClick={handleExplore}>Explore</button>            
        </div>
      </div>
    </>
  )
}

export default Homepage;