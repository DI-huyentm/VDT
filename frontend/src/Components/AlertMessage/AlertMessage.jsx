import React from 'react'
import './AlertMessage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const AlertMessage = () => {
  return (
    <div className='alert-container'>
        <p>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: 'black', fontSize: '20'}}> </FontAwesomeIcon>
          Successfully added to cart !
        </p>
    </div>
  )
}

export default AlertMessage;
