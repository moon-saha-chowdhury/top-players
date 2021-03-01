import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import './Player.css';

const Player = (props) => {
    const {name,salary,image,team} = props.allPlayer
    const playerClick = props.handleAddPlayer;
    return (
        <div className="player">
            <div>
            <img className="player-image" src={image} alt=""/>
            </div>
            <div className="player-details">
            <h2>{name}</h2>
            <h5>Team: {team}</h5>
            <h4>Salary: ${salary}</h4>
            <Button variant="primary club-button" onClick={()=>playerClick(props.allPlayer)} > 
            <FontAwesomeIcon icon={faUser}/>.Add To Club
            </Button>
            </div>
            
        </div>
    );
};

export default Player;