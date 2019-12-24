import React, { useState, Fragment, useEffect } from 'react'

const ContactForm = () => {
    const [ contact, setContact ] = useState({
        email: '',
        firstName: '',
        lastName: '',
        message: ''
    })
    const [ message, setMessage ] = useState({
        type: '',
        messages: ""
    })
    let sentCount = localStorage.getItem('sentCount');
    useEffect( () => {
        if(sentCount === null){
            localStorage.setItem('sentCount', 0);
        }else {
            
        }
    }, []);

    const onChange = (e) => setContact({ ...contact, [e.target.name] : e.target.value });
    const submit = (e) => {
        e.preventDefault();
        if(contact.email === '' && contact.firstName === '' && contact.lastName === '' && contact.message === ''){
            setMessage({ ...message, type: 'error', message: "All fields are required" });
        }
        else{
            if( localStorage.getItem('sentCount') < 5 ){
                localStorage.setItem('sentCount', ++sentCount);
                setMessage({ ...message, type: 'success', message: "Sent" });
            } else {
                setMessage({ ...message, type: 'error', message: 'You only have a max. of 5 messages per day'  })
            }
           
        }
        setTimeout( () => {
            setMessage({
                type: '',
                message: ''
            })
        }, 3000);
    }
    return(
        <Fragment>
            {
                message.type !== '' ? (
                    <div className={ `card ${ message.type === 'success' ? 'bg-success' : 'bg-danger' }` }>
                            { message.message }
                    </div>
                ) : null
            }
            <form 
                onSubmit={ submit }
                className="form-container"
            >
                <h3>Send Me a Message</h3>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail" 
                    onChange={ onChange }
                />
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={ onChange }
                />
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={ onChange }
                />
                <textarea 
                    rows="10" 
                    name="message" 
                    placeholder="Message..." 
                    onChange={ onChange }
                />
                <input 
                    type="submit" 
                    value="Send" 
                    className="button button-block button-primary" 
                />
            </form>
            
        </Fragment>
        
    )
}

export default ContactForm;