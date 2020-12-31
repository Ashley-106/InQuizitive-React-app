import React from 'react';
import InQuizitiveApp from './InQuizitiveApp';

const ScoreBoard = (props) => {

    return <div className="container quiz">
                <h2 className="title">This is the score board.</h2>
                <p>You scored: {props.finalScore}</p>
                <button onClick={() => props.endCurrentQuiz()}>Continue</button>
           </div>;

};

export default ScoreBoard;