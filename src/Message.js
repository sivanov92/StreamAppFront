
const Message = ({content , content_class}) => {
    return (
        <div className={`message ${content_class}`}>
            { content }
        </div>
    )
}

export default Message
