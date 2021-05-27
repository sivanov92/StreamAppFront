import VideoPlayer from './VideoPlayer'
import VideoCarouselArrowLeft from './VideoCarouselArrowLeft';
import VideoCarouselArrowRight from './VideoCarouselArrowRight';

const VideoListingZone = ({header}) => {
    const STREAM_WINDOWS = 4
    const Containers = []
    for(let i = 0;i<STREAM_WINDOWS;i++){
        Containers.push(<VideoPlayer key={i} key_id={i}/>)
    }
    return (
        <div className='VideoListingZone'>
            <br/>
            <h3>{header}</h3>
            <div className='carousel-arrows'>
              <VideoCarouselArrowLeft key='left'/>
              <div className='arrow-empty'>

              </div>
              <VideoCarouselArrowRight key='right'/>
            </div>
            <div className='VideoListing'>
             {Containers}
            </div>
        </div>
    )
}

export default VideoListingZone
