import VideoCarouselArrowLeft from './VideoCarouselArrowLeft';
import VideoCarouselArrowRight from './VideoCarouselArrowRight';

const LiveStreamZone = () => {
    return (
        <div className='LiveStreamZone'>
            <div className='carousel-arrows'>
              <VideoCarouselArrowLeft key='left'/>
              <div className='arrow-empty'>

              </div>
              <VideoCarouselArrowRight key='right'/>
            </div>
        </div>
    )
}

export default LiveStreamZone
