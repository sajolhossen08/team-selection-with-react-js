import React, {} from 'react';
import Player from './Player/Player';
import players from '../../fakeData/fakeData.json';

const Players = (props) => {
    
    return (
        <section className="col-md-8 border-end">
        <div className="row">
          <h2>Total Players: {players.length}</h2>
            {
                players.map(player => <Player handleAddToSelection ={props.handleAddToSelection} key={player.id} player={player}></Player>)
            }
        </div>
    </section>
    );
};

export default Players;