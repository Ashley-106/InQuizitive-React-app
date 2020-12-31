import React from 'react';
import ReactDOM from 'react-dom';

import InQuizitiveApp from './InQuizitiveApp';
// import currentQuiz from './CurrentQuiz';

import animals from '../quizes/animals';
import british from '../quizes/british';
import film from '../quizes/film';
import general_knowledge from '../quizes/general_knowledge';
import geography from '../quizes/geography';
import history from '../quizes/history';
import music from '../quizes/music';
import politics from '../quizes/politics';
import sport from '../quizes/sport';




class Quiz extends React.Component  {
    constructor(props) {
        super(props);
        this.currentQuiz = this.currentQuiz.bind(this);
        this.quizControl = this.quizControl.bind(this);
        this.hint = this.hint.bind(this);
        this.state = {
            questionCounter: 0,
            hintCount: 3,
            hintVisible: false,
            correctScore: 0
        }
    
    }
    
   currentQuiz = () => {
        const selectedQuiz = this.props.selectedQuiz;
        let quiz = {
            activeNumber: undefined,
            activeQuestion: undefined,
            activeAnswer:  undefined,
            activeHint: undefined
        };
    
        switch(selectedQuiz) {
            case 'Animals':
                return quiz = {
                    activeNumber: animals[this.state.questionCounter].number,
                    activeQuestion: animals[this.state.questionCounter].question,
                    activeAnswer:  animals[this.state.questionCounter].answer,
                    activeHint: animals[this.state.questionCounter].hint
                }
                break;
            case 'British':
                return quiz = {
                    activeNumber: british[this.state.questionCounter].number,
                    activeQuestion: british[this.state.questionCounter].question,
                    activeAnswer:  british[this.state.questionCounter].answer,
                    activeHint: british[this.state.questionCounter].hint
                }
                break;
            case 'Film':
                return quiz = {
                    activeNumber: film[this.state.questionCounter].number,
                    activeQuestion: film[this.state.questionCounter].question,
                    activeAnswer:  film[this.state.questionCounter].answer,
                    activeHint: film[this.state.questionCounter].hint
                }
                break;
            case 'General Knowledge':
                return quiz = {
                    activeNumber: general_knowledge[this.state.questionCounter].number,
                    activeQuestion: general_knowledge[this.state.questionCounter].question,
                    activeAnswer:  general_knowledge[this.state.questionCounter].answer,
                    activeHint: general_knowledge[this.state.questionCounter].hint
                }
                break;
            case 'Geography':
                return quiz = {
                    activeNumber: geography[this.state.questionCounter].number,
                    activeQuestion: geography[this.state.questionCounter].question,
                    activeAnswer:  geography[this.state.questionCounter].answer,
                    activeHint: geography[this.state.questionCounter].hint
                }
                break;
            case 'Music':
                return quiz = {
                    activeNumber: music[this.state.questionCounter].number,
                    activeQuestion: music[this.state.questionCounter].question,
                    activeAnswer:  music[this.state.questionCounter].answer,
                    activeHint: music[this.state.questionCounter].hint
                }
                break;  
            case 'History':
                return quiz = {
                    activeNumber: history[this.state.questionCounter].number,
                    activeQuestion: history[this.state.questionCounter].question,
                    activeAnswer:  history[this.state.questionCounter].answer,
                    activeHint: history[this.state.questionCounter].hint
                }
                break;
            case 'Politics':
                return quiz = {
                    activeNumber: politics[this.state.questionCounter].number,
                    activeQuestion: politics[this.state.questionCounter].question,
                    activeAnswer:  politics[this.state.questionCounter].answer,
                    activeHint: politics[this.state.questionCounter].hint
                }
                break;
            case 'Sport':
                return quiz = {
                    activeNumber: sport[this.state.questionCounter].number,
                    activeQuestion: sport[this.state.questionCounter].question,
                    activeAnswer:  sport[this.state.questionCounter].answer,
                    activeHint: sport[this.state.questionCounter].hint
                }
                break;
            
        }
    };

    quizControl = (e) => {
        e.preventDefault();
        const answerInput = e.target.parentNode.children[0].value;
        if (this.state.questionCounter < 19) {
            this.setState((prevState) => {
                return {
                    questionCounter: prevState.questionCounter +1,
                    hintVisible: false
                };
            });
            this.inputAnswer(answerInput)
            e.target.parentNode.children[0].value = '';
        } else {
            /// do this when game over
            console.log('game over')
            this.props.quizOver();

            this.props.finalScore(this.state.correctScore);
        }
    };

    hint = (e) => {
        e.preventDefault();
        if (this.state.hintCount > 0) {
            this.setState((prevState) => {
                return {
                    hintCount: prevState.hintCount -1,
                    hintVisible: true
                };
            });
        } else {
            return;
        }
       
        console.log(this.state.hintCount);
    }

    inputAnswer = (answer) => {
        if (answer === this.currentQuiz().activeAnswer) {
            //do when correct
            console.log('that was correct');
            this.setState((prevState) => {
                return {
                    correctScore: prevState.correctScore +1
                };
            });
        } else {
            //do when incorrect
            console.log('that was incorrect');
        }
    };

    render() {
        return <div className="container">
                    <div className="quiz">
                        <h2 className="title">{this.props.selectedQuiz} Quiz</h2>
                        <h4 className="title">Number: {this.currentQuiz().activeNumber}</h4>
                        <p>{this.currentQuiz().activeQuestion}</p>
                        <h4 className="hint">Hint Count: {this.state.hintCount}</h4>
                        <h4 className="hint">{this.state.hintVisible && this.currentQuiz().activeHint}
                        </h4>
                    </div>
                    <form>
                        <input type="text" placeholder="enter answer"></input>
                        <button onClick={this.quizControl}>Next Question</button>
                        <button onClick={this.hint}>Hint</button>
                    </form>
                    <button onClick={() => this.props.endCurrentQuiz()}>End Current Quiz</button>

                    

                    {console.log(this.state.correctScore)}
                </div>
    }
    
};


export default Quiz;