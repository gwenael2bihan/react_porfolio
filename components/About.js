import React, { forwardRef } from 'react'
import styles from './styles.module.css';

const About = forwardRef(({ onBackClick }, ref) => {
    return (
        <div className={styles.aboutContent}>
            About
            <h1 ref={ref}>
				A React article for Latin readers
			</h1>
        </div>
    )
});

export default About;