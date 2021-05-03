import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ReactPlayer from 'react-player'

const LiveStreamZone = () => {
    return (
        <div className='LiveStreamZone'>
            <div className='stream stream-secondary'>
               <div className='stream-secondary-container arrow-left'>
                 <div className='arrow left-1'>
                   <ArrowBackIosIcon/>
                 </div>
               </div>
            </div>
            <div className='stream stream-main'>
               <div className='stream-primary-container'>
               </div>
            </div>
            <div className='stream stream-secondary'>
               <div className='stream-secondary-container arrow-right'>
               <div className='arrow right-1'>
                   <ArrowForwardIosIcon/>
                 </div>
               </div>
            </div>


        </div>
    )
}

export default LiveStreamZone
