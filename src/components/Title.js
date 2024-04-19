import React from 'react'

export default function Title({name , title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                   <strong style={{color:'#B67D48' ,position: 'absolute',top:"15px",left:'38%'}}>{title} Product</strong>
                </h1>
            </div>
        </div>
    )
}
