import React from 'react'
import data from "./data.json"
import Card from './Card';
import { v4 as uuidv4 } from "uuid";


export function Board({ cycle }) {


    return (
        <div className='board'>
            {data.map(d => {
                return <Card d={d} cycle={cycle} key={uuidv4()} />
            })}
        </div>
    )
}
