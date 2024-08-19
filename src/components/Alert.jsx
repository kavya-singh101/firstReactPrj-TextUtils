import React from 'react'

function Alert(props) {
    const capatalize = (word) => {
        let lower = word.toLowerCase();
        // document.getElementById('alertBox').style.invisibility="hidden";
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" id='alertBox'>
                <strong>{capatalize(props.alert.type)}</strong>: {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
        </div>
    )
}

export default Alert
