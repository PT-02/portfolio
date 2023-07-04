import React from 'react'
import './email.css'

function Email(){
    return(
        <>
        <div className='email'>  
        <h1>Send me a message</h1> 
        <h4>Got a question, or just wanna say hello?</h4>
        <h4>Go Ahead</h4>
        <div className='container'>
            <form>
                <input type='text' id='firstName' placeholder='First Name' required></input>
                <input type='email' id='email' placeholder='Email Name' required></input>
                <textarea placeholder='jfdjgjgdfkgkgkgjlkgkgkdkgkgkdgkg'required></textarea>
                <input type='submit' value="send" id='button'></input>
                
            </form>


        </div>

        

        </div>
        </>
    );
};

export default Email