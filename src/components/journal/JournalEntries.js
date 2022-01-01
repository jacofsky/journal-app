import React from 'react'
import JournalEntry from './JournalEntry'

const JournalEntries = () => {

    const entries = [1,2,3,4,5,6]

    return (
        <div className='Journal__entries mt-2'>
            
            {
            
                entries.map( (entrie) => (
                    <JournalEntry key={entrie} />
                ))
            
            }

        </div>
    )
}

export default JournalEntries
