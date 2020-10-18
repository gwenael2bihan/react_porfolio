import React, { useRef } from 'react'
import NavBar from './NavBar';
import styles from './styles.module.css';
import Grid from '@material-ui/core/Grid';

import About from './About';
import Contact from './Contact'
import Timeline from './Timeline'
import Menu from './Menu'
import Cv from './CV';

const Home = () => {
    const aboutRef = useRef(null)
    const cvRef = useRef(null)
    const homeRef = useRef(null)
    const timelineRef = useRef(null)
    const contactRef = useRef(null)

    function handleAboutClick() {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    function handleCVClick() {
        cvRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    function handleHomeClick() {
        homeRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    function handleTimelineClick() {
        timelineRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    function handleContactClick() {
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <body>
            <div className={styles.main}>
                <NavBar
                    handleAboutClick={handleAboutClick}
                    handleCVClick={handleCVClick}
                    handleHomeClick={handleHomeClick}
                    handleTimelineClick={handleTimelineClick}
                    handleContactClick={handleContactClick}
                />
                <Menu ref={homeRef} onBackClick={handleHomeClick} />
                <About ref={aboutRef} onBackClick={handleAboutClick} />
                <Cv ref={cvRef} onBackClick={handleCVClick} />
                <Timeline ref={timelineRef} onBackClick={handleTimelineClick} />
                <Contact ref={contactRef} onBackClick={handleContactClick} />
            </div>
        </body>
    );
};

export default Home;