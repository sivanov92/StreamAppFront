
const Message = ({content , type}) => {
    let content_class;
    switch(type) {
        case 'progress' : 
            content_class = 'message-in-progress';
            break;
        case 'success' :
            content_class = 'message-success';
            break;
        case 'fail' :
            content_class = 'message-failed' ;
            break;        
    }
    return (
        <div className={`message ${content_class}`}>
            { content }
        </div>
    )
}

export default Message
