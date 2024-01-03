import React from 'react'

const Alert = (props) => {
  return (
    <div className="alert alert-success fixed-bottom w-25  d-flex align-items-center justify-content-center" style={{height: '2.5rem',fontsize:'1.5rem'}} role="alert">
    {props.message}
    </div>
  )
}

export default Alert 
