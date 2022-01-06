import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

const JournalEntry = ({id, date, title, body, url}) => {

    const dispatch = useDispatch()

    const noteDate = moment(date)

    const handleEntryClick = () => {
        dispatch(activeNote(id, {date, title, body, url}))
    }

    return (
        <div className='journal__entry mb-2 pointer animate__animated animate__fadeIn' onClick={handleEntryClick}>
            
            {
                url &&

                <div className="journal__entry--picture h-auto" style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`,
                    backgroundPosition: 'center'
                }}></div>
            }
            

            <div className="journal__entry--body">
                <p className="journal__entry--title">
                    {title}
                </p>
                <p className="journal__entry--content">
                    {body} 
                </p>
                
            </div>

            <div className="journal__entry-date-box ms-auto pe-3">
                <span>{noteDate.format('dddd')}</span> <h4 className='m-0'>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}

export default JournalEntry
