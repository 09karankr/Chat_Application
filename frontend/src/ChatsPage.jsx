import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    
    return(
        <div style= {{height: '100vh'}}> 
           <PrettyChatWindow
           projectId='cd09a801-99ef-4939-aab7-27a0b6444bd1'
           username={props.user.username}
           secret={props.user.secret}
           style={{height: '100%'}}
           />

        </div>
    )
}

export default ChatsPage