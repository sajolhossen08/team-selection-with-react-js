import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLiraSign} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

const Sidebar = ({selection}) => {
    const totalBudget = selection.reduce((previousCount, currentCount) => previousCount + currentCount.salary, 0)
    return (
        <aside className="sidebar col-md-4 ps-5">
            <h5>Selected Players ({selection.length})</h5>
            <ul>
                {
                    selection.map(({name, salary, id}) => <li key = {id}>{name} - {salary} <small><FontAwesomeIcon icon={faLiraSign} /></small>(BDT) </li>)
                }
            </ul>
            <hr/>
            <div className="d-grid total">
                <h4>Total Budget(BDT) - {totalBudget} <small><FontAwesomeIcon icon={faLiraSign} /></small></h4>
            </div>
        </aside>
    );
};

export default Sidebar;