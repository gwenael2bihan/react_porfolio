import React from 'react';

import { Link } from 'react-router-dom'
import styles from './styles.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import TimelineIcon from '@material-ui/icons/Timeline';
import ContactsIcon from '@material-ui/icons/Contacts';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

function NavBar(props) {

  return (
    <div className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        <IconButton edge="start" className="icon-button" color="inherit" title="home" aria-label="home" onClick={props.handleHomeClick}>
          <HomeIcon style={{fontSize: "50px"}} className={styles.icons} />
        </IconButton>
        <IconButton edge="start" className="icon-button" color="inherit" title="about" aria-label="about" onClick={props.handleAboutClick}>
          <InfoIcon style={{fontSize: "50px"}} className={styles.icons} />
        </IconButton>
        <IconButton edge="start" className="icon-button" color="inherit" title="cv" aria-label="cv" onClick={props.handleCVClick}>
          <BusinessCenterIcon style={{fontSize: "50px"}} className={styles.icons} />
        </IconButton>
        <IconButton edge="start" className="icon-button" color="inherit" title="timeline" aria-label="timeline" onClick={props.handleTimelineClick}>
          <TimelineIcon style={{fontSize: "50px"}} className={styles.icons} />
        </IconButton>
        <IconButton edge="start" className="icon-button" color="inherit" title="contact" aria-label="contact" onClick={props.handleContactClick}>
          <ContactsIcon  style={{fontSize: "50px"}} className={styles.icons} />
        </IconButton>
        <IconButton edge="start" className="icon-button" color="inherit" title="github" aria-label="github" >
          <GitHubIcon style={{fontSize: "50px"}} className={styles.icons} />
        </IconButton>
        <Typography variant="h6" className="title">
          Mon portfolio
          </Typography>
      </Toolbar>

    </div>


  );
}
export default NavBar;