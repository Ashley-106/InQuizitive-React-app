import React from 'react';
import ReactDOM from 'react-dom';

import Header_Nav from './Header_nav';
import Quiz from './Quiz';
import Rules from './Rules';
import ScoreBoard from './ScoreBoard';

class InQuizitiveApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuiz: undefined,
            quizInPlay: false,
            scoreBoardDisplay: false,
            rulesBoard: true
        };
    }
    

    quizSelector = (quiz) => {
        if (quiz !== this.state.selectedQuiz) {
            this.setState({
                selectedQuiz: quiz,
                quizInPlay: true,
                scoreBoardDisplay: false,
                rulesBoard: false
            });
        }
    };

    quizOver = () => {
        this.setState(() => {
            return {
                quizInPlay: false,
                scoreBoardDisplay: true,
                rulesBoard: false
            };
        });
    };


    render() {
        return <div>
                <Header_Nav 
                    quizSelector={this.quizSelector} // child to parent: for selecting a quiz
                    quizInPlay={this.state.quizInPlay} // parent to child: for disabling buttons once quiz selected
                />

                

                <div>
                    {this.state.quizInPlay && 
                    <Quiz 
                        selectedQuiz={this.state.selectedQuiz}
                        quizOver={this.quizOver}
                        // finalScore={this.finalScore}
                    />}

                   
                    
                    
                    {this.state.scoreBoardDisplay && <ScoreBoard/>}
                    {this.state.rulesBoard && <Rules />}
                   
                </div>

                </div>
    }

};


export default InQuizitiveApp;