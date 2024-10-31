import React, { useEffect, useState } from 'react'
import ProgressBar from '../components/ProgressBar';

const data = [
    {
        "question": "What is your name?",
        "answer": "Someone"
    },
    {
        "question": "What is the name of your pet?",
        "answer": "A dog"
    },
    {
        "question": "What is the name of your country?",
        "answer": "India"
    },
    {
        "question": "Which state are you from?",
        "answer": "TamilNadu"
    },
    {
        "question": "Who is your favourite cricketer?",
        "answer": "Sachin Tendulkar"
    },
];


const Flashcard = () => {

    const [flashCard, setFlashCard] = useState({
        question: '',
        answer: '',
        flip: false,
        index: 0
    });

    useEffect(() => {
        setFlashCard((prev) => ({
            ...prev,
            question: data[prev.index].question,
            answer: data[prev.index].answer,
        }));
    }, [flashCard.index]);

    const handlePrevious = () => {

        setFlashCard((prev) => ({
            ...prev,
            index: Math.max(prev.index - 1, 0)
        }));
    }

    const toggleFlip = () => {
        setFlashCard((prev) => ({
            ...prev,
            flip: !prev.flip
        }));
    }

    const handleNext = () => {

        setFlashCard((prev) => ({
            ...prev,
            index: Math.min(prev.index + 1, data.length - 1)
        }))
    }

    return (
        <div className='flashcard'>
            <ProgressBar currentIndex={flashCard.index} total={data.length} />
            <div className='text-section'>
                {!flashCard.flip && <h1>{flashCard.question}</h1>}
                {flashCard.flip && <h1>{flashCard.answer}</h1>}
            </div>
            <div className='footer'>
                <button disabled={flashCard.index === 0} onClick={handlePrevious}>Previous</button>
                <button onClick={toggleFlip}>{flashCard.flip ? 'Hide Answer' : 'Show Answer'}</button>
                <button disabled={flashCard.index === data.length - 1} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Flashcard
