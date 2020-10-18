import React, { forwardRef, useState } from 'react'
import styles from './styles.module.css';

const Contact = forwardRef(({ onBackClick }, ref) => {

    function handleSubmit(event) {
        alert('A name was submitted: ' + email);
        event.preventDefault();    
    }
    
    function handleChange(event) {
        setEmail(event.target.value);
        console.log("==> email: ", email)

    }
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [text, setText] = useState("");

    return (
        <div className={styles.contactContent}>
            Contact
            <h1 ref={ref}>
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Surname:
                    <input type="text" value={surname} onChange={handleChange} />
                </label>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="text" value={email} onChange={handleChange} />
                </label>
                <label>
                    Message:
                    <textarea cols="36" rows="8" id="messageTXT" name="messageTXT" value={text} onChange={handleChange}></textarea>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
});



export default Contact;