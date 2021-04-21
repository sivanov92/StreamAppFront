import ReactPlayer from 'react-player'

const ListPlayerContainers = ({key_id}) => {
    return (
        <div className='ListPlayerContainers player-wrapper'>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' key={key_id}/>
        </div>
    )
}

export default ListPlayerContainers
