import React from 'react';
import { Profile } from "./Profile";

export function User({ stateHandler }) {
    return (
        <div className='user'>
            <Profile />
            <div className='buttons'>
                <button className="buttons__state" onClick={stateHandler}>daily</button>
                <button className="buttons__state" onClick={stateHandler}>weekly</button>
                <button className="buttons__state" onClick={stateHandler}>monthly</button>
            </div>
        </div>
    )
}