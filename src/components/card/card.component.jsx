// import React from 'react';
// import "./card.styles.css"

// export const Card = props => (

//     <div className="card-container">
//         <img 
//             alt="kitten" 
//             src={`https://robohash.org/${props.monster.id}?set=set4&size=150x150`}/>
//         <h1> {props.monster.name} </h1>
//         <h2> {props.monster.email} </h2>
//     </div>

// )

import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card'>
        <img alt="kitty" src={`https://robohash.org/${props.user.id}?set=set4&size=150x150`} />
        <h1>{props.user.name}</h1>
        <h2>{props.user.email}</h2>
    </div>
);
