import React from 'react';
import ReactDOM from 'react-dom';

const Header_Nav = (props) => {
        return <header>
                    <h1>In<span>Quiz</span>itive</h1>
                        <ul>
                            <li><button disabled={props.quizInPlay}
                            onClick={() => props.quizSelector('Animals')}>
                                Animals
                            </button></li>
                            <li><button disabled={props.quizInPlay}
                            onClick={() => props.quizSelector('British')}>
                                British
                            </button></li>
                            <li><button disabled={props.quizInPlay}
                            onClick={() => props.quizSelector('Film')}>
                                Film
                            </button></li>
                            <li><button disabled={props.quizInPlay}
                            onClick={() => props.quizSelector('General Knowledge')}>
                                General Knowledge
                            </button> </li>
                            <li><button disabled={props.quizInPlay}
                            onClick={() => props.quizSelector('Geography')}>
                                Geography
                            </button></li>
                            <li><button disabled={props.quizInPlay}
                            onClick={() => props.quizSelector('History')}>
                                History
                            </button></li>
                            <li><button disabled={props.quizInPlay}
                            onClick={() => props.quizSelector('Music')}>
                                Music
                            </button></li>
                            <li><button disabled={props.quizInPlay}
                            onClick={() => props.quizSelector('Politics')}>
                                Politics
                            </button></li>
                            <li><button disabled={props.quizInPlay}
                            onClick={() => props.quizSelector('Sport')}>
                                Sport
                            </button></li>
                        </ul>
                </header>;
    
};


export default Header_Nav;