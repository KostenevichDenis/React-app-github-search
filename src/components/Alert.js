import React, { useContext } from "react";
import { AlertContext } from '../context/alert/alertContext';

function Alert() {
    const {alert, hide} = useContext(AlertContext)

    if(!alert) return null

  return (
    <div 
    className={`alert alert-${alert.type || 'secondary'} alert-dismissible position-relative mr-5`}
    role="alert">
      {alert.text}
      <button
        type="button"
        className="close position-absolute end-0 me-3"
        data-dismiss="alert"
        aria-label="Close"
        onClick={hide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
