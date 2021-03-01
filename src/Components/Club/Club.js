import React from 'react';
import './Club.css';

const Club = (props) => {
    const club = props.club;
    let totalBudget = 0;
    let playerName ="";
    
    for (let i = 0; i < club.length; i++) {
        const player = club[i];
        totalBudget = totalBudget + parseInt(player.salary);
        playerName = playerName+' ' +player.name +' '+player.salary;
        

    }
        
    return (
        <div className="club">

            <h2>Player Added: {club.length}</h2>
            <h4>Added Player Information: <small>(name & salary)</small> </h4>
            <p>{playerName}</p>
            <h4>Total Budget: {totalBudget}</h4>
        </div>
    );
};

export default Club;