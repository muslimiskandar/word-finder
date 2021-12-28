import React from 'react'

function Results(props) {
    const {data} = props
    return (
        <div className='results'>
            {(data.length === 0  ? (
                <i className='tips'>Type anthing to see results..</i>
            ): (
            <ul>
                {data.map((d, index) =>
                <li key={index}>{d.word}</li>
                )}
            </ul>
            )
            
            )}
        </div>
    )
}

export default Results
