import React from 'react'
import ellipsis from "./images/icon-ellipsis.svg";


function Card({ d, cycle }) {
    return (
        <div className="card">
            <div className="card__background"></div>
            <div className="card__datas">
                <div className="card__title">
                    <p className="card__name">{d.title}</p>
                    <img className='card__ellipsis' src={ellipsis} alt="" />
                </div>
                <div className="card__hours">
                    <h3 className="card__hour--current">{d.timeframes[cycle].current}hrs</h3>
                    <p className="card__hour--prev">Last Week - {d.timeframes[cycle].previous}hrs</p>
                </div>
            </div>
        </div>
    )
}

export default Card