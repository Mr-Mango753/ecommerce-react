import React from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom'
import Portrait from '../../assets/_MG_0848.JPG'

const About = () => {
  const navigate = useNavigate();
  const navigateTo = () => navigate('/contact')

  return (
    <>
    <section className="about">
        <div className="main">
            <img src={Portrait}></img>
            <div className='about-text'>
                <h1>About the Store</h1>
                <h5>Made with React.js and Django/python</h5>
                <p>Hi, I'm Jadon! I'm currently a Northwestern student studying Computer Science and Statistics. I created this website with React.js and Django/Python. This website was made because I wanted to learn more about web development, both the front and backend. If you want to connect with me, click the button below!
                </p>
                    <div className="center">
                      <button className="btn" onClick={navigateTo}>
                        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                        </svg>
                        <span>Let's Connect!</span>
                      </button>
                    </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About