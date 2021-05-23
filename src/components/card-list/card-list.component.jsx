// import React from 'react';
// import { Card } from '../card/card.component';
// import './card-list.styles.css';

// export const CardList = props => (
   
//     <div className="card-list">
//         {props.monsters.map(monster => (
//             <Card key={monster.id} monster={monster} />
//         ))}
//     </div>
// );

import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => (
    <div className ='card-list'>
        {props.kittenUsers.map(kitty => (
            <Card user={kitty} key={kitty.id} />
        ))}

    </div>
)