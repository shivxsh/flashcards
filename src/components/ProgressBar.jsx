import React from 'react'

const ProgressBar = ({ currentIndex, total }) => {
    const getPercentage = (currentIndex, total) => {

        const percentage = ((currentIndex + 1) / total) * 100;

        return percentage;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className='progress'>
            <p>{getPercentage(currentIndex, total)}%</p>
            <p>{currentIndex + 1} / {total}</p>
        </div>
    )
}

export default ProgressBar
