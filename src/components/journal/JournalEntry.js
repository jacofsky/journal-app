import React from 'react'

const JournalEntry = () => {
    return (
        <div className='journal__entry mb-2 pointer'>
            <div className="journal__entry--picture" style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://cutt.ly/PUAAo5z)',
                backgroundPosition: 'center'
            }}></div>

            <div className="journal__entry--body">
                <p className="journal__entry--title">
                    new day
                </p>
                <p className="journal__entry--content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                
            </div>

            <div className="journal__entry-date-box">
                Monday <span>28</span>
            </div>
        </div>
    )
}

export default JournalEntry
