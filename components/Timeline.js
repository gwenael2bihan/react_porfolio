import React, { forwardRef } from 'react'
import styles from './styles.module.css';

const Timeline = forwardRef(({ onBackClick }, ref) => {
    return (
        <div className={styles.timelineContent}>
            Timeline
            <h1 ref={ref}>
				A React article for Latin readers
			</h1>
			// Rest of the article's content...
        </div>
    )
});



export default Timeline;