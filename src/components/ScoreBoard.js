import React from 'react';
import InQuizitiveApp from './InQuizitiveApp';

const ScoreBoard = (props) => {

    return <div>
                <h2>This is the score board.</h2>
                <p>You scored: {props.correctScore}</p>
           </div>;

};

export default ScoreBoard;