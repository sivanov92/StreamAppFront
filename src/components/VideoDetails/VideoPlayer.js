import ReactPlayer from 'react-player';

const VideoPlayer = ({userData, useAsPlaceholder, url}) => {
    if(useAsPlaceholder){
        return (
            <div className='player-wrapper'>

            </div>
        );
    }
    return (
        <div className='player-wrapper'>
            <div className='VideoPlayer'>
               <ReactPlayer className="react-player" url={url} width="100%" height="100%" controls={true} />
            </div>
            <div className='player-meta'>
               <div className='avatar '>
                 S.I
               </div>
               <div className='text-meta'>
                  <div className='meta-general'>
                    New Post Title 
                  </div>
                  <div className='meta-general'>
                    Stan Ivanov
                  </div>
               </div>
            </div>
        </div>
    )
}

export default VideoPlayer
