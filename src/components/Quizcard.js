import '../styles/Quizcard.css';
import {useState} from 'react'



function Quizcard(props) {
    const [state, setstate] = useState({ show: true, open: false });

    return state.show ? (
        <div className="quiz-card">
            <p>{props.name}</p>
        </div>
    ) : <div className="hidden-card"></div>
}

export default Quizcard;