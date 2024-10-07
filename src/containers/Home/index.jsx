import React from 'react'
import './styles.scss';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    console.log(navigate);
    const handleNavigateToContact = ()=>{
navigate('/contact')
    }
  return (
    <section id="home" className='home'>
        <div className='home-text-wrapper'>
            <h1>
                Hello,I'm Anantha Revathi
                <br/>
                Frontend Developer
            </h1>
        </div>
        <div className='home__conatact__me'>
            <button onClick={handleNavigateToContact}>Hire Me</button>
        </div>
    </section>
  )
}
