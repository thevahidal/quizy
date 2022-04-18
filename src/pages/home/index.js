import { useState } from 'react';

import Button from '../../components/button';
import * as styles from './index.styled';

const questions = [
    {
        id: 0,
        text: 'Which fruit is red?',
        multipleChoice: true,
        answers: [
            {
                id: 0,
                text: 'Apple',
            },
            {
                id: 1,
                text: 'Banana',
            },
            {
                id: 2,
                text: 'Orange',
            },
            {
                id: 3,
                text: 'Cherry',
            }
        ],
        correctAnswer: 4,
    }
];

const Home = props => {
    const [results, setResults] = useState(questions.map(q => ({
        id: q.id,
        correct: false,
        selected: null,
        evaluated: false,
    })));

    const handleChooseAnswer = (questionId, optionId) => {
        setResults(results.map(r => {
            if (r.id === questionId) {
                return {
                    ...r,
                    selected: optionId,
                    correct: r.correctAnswer === optionId,
                }
            }

            return r;
        }));
    }

    const handleGoToNext = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <styles.Brand>Quizy</styles.Brand>
            <form
            // onSubmit={handleGoToNext}
            >
                <styles.Questions>
                    {questions.map(question => (
                        <styles.Question key={question.id}>
                            <p className='title'>
                                {question.text}
                            </p>
                            <styles.Options>
                                {question.answers.map(answer => {
                                    const selected = results[question.id].selected === answer.id;

                                    return (<styles.Option key={answer.id}
                                        onClick={() => handleChooseAnswer(question.id, answer.id)}
                                        selected={selected}
                                        correct={results[question.id].correct}
                                    >
                                        {answer.text}
                                    </styles.Option>
                                    )
                                })}
                            </styles.Options>
                        </styles.Question>
                    ))}
                </styles.Questions>
                {/* <Button className="mt-5" type="submit">
                    Next
                </Button> */}
            </form>
        </div>
    )
}

export default Home