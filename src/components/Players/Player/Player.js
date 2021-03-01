import React, { useState } from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLiraSign} from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name, salary, image, role, born} = props.player;
    const [isSelected, setIsSelected] =useState(false);

    return (
        <div className="col text-center shadow p-3 mb-5 bg-white rounded player-details-div">
            <div className="card border-0">
                <div className="card-body">
                    <img className= "player-image" src={image} alt="..."/>
                    <h5 className="card-title">{name}</h5>
                    <p>Born: {born}</p>
                    <p>Role: {role}</p>
                    <h6 className="card-text">Salary: {salary} <FontAwesomeIcon icon={faLiraSign} /></h6>
                    <button disabled= {isSelected} onClick = {() => {
                        props.handleAddToSelection(props.player)
                        setIsSelected(true)
                    }} className="btn btn-success">
                    {isSelected ? "✓ Selected" :  "+ Select"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;