import ListPlayerContainers from './ListPlayerContainers'

const SelectVideoContainer = ({header}) => {
    const STREAM_WINDOWS = 4
    const Containers = []
    for(let i = 0;i<STREAM_WINDOWS;i++){
        Containers.push(<ListPlayerContainers key={i} key_id={i}/>)
    }
    return (
        <div className='SelectVideoContainer'>
            <h3>{header}</h3>
            <div className='VideoListing'>
             {Containers}
            </div>
        </div>
    )
}

export default SelectVideoContainer
