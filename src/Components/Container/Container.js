import React, { useEffect, useState } from 'react';
import playerData from '../../fakeData/data.json';
import Club from '../Club/Club';
import Player from '../Player/Player';
import './Container.css';

const Container = () => {
    const [players,setPlayers] = useState([]);
    const [club, setClub] =useState([]);

    useEffect(() => {
      setPlayers(playerData);
    },[])

    const handleAddPlayer=(player)=>{
        const newClub = [...club,player];
        setClub(newClub);
    }
    return (
        <div className="main-container">
         <div>
         <h1 style={{color:'#31728b'}}>Top Footballers 2020: {players.length}</h1>

         {
        players.map(player => <Player allPlayer ={player} handleAddPlayer={handleAddPlayer}></Player>)
      }
         </div>

         <div>
             <Club club={club} ></Club>
         </div>

        </div>
    );
};

export default Container;