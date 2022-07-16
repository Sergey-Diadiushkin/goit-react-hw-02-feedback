import React from 'react'
import './Statistics.css'
import PropTypes from 'prop-types';

const Statistics = ( {good,neutral,bad,total,positivePercentage})=> {
 
    return (
        <div className='feedback'>
            <h2>Statistics</h2>
            
            <ul>
                <li className='list'>Good:{good}</li>
                <li className='list'>Neutral:{neutral }</li>
                <li className='list'>Bad:{ bad}</li>
                <li className='list'>Total:{total }</li>
                <li className='list'>Positive feedback:{positivePercentage}%</li>
            </ul>
        </div>
        
        
    );
}


export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
