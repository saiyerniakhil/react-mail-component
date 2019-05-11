import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let email = {
    sender : 'React Newsletter',
    subject: 'React Newsletter - issue 36',
    date : 'Jul 15',
    message: '*React Newsletter - issue 36 Read this issue on the web http://www.reactjs.org or just click the link in the mail'
}

function Mail({ emailBody }) {
    return(
        <div>
        <div className='total-email'>
        <div className='check-box'>
        <input type='checkbox' name='mail-select'/>
        </div>
        <div>
        <label htmlFor="mail-select">
            <div className='single-line-email'>
                <div className='first-line'>
                    <Sender sender={emailBody.sender}/>
                    <Subject sub={emailBody.subject}/>
                    <Date dateRec={emailBody.date}/>
                </div>
                <div className='msg-glimpse'>
                    <Message msg={emailBody.message}/>
                </div> 
            </div>
        </label>
        </div>
        </div>
        </div>
    )
}

let Message = ({msg}) => {
    return(
        <div>
            {msg}
        </div>
    )
}

let Date = ({dateRec}) => {
    return(
        <div>
            {dateRec}
        </div>
    )
}


let Subject = ({sub}) => {
    return(
        <div>
            {sub}
        </div>
    )
}

let Sender = ({sender}) => {
    return(
        <div>
            {sender}
        </div>
    )
}

ReactDOM.render(<Mail emailBody={email}/>,document.querySelector('#root'))

