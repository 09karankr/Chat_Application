import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'cd09a801-99ef-4939-aab7-27a0b6444bd1', 
        props.user.username, 
        props.user.secret
        );
    return(
        <div style= {{height: '100vh'}}> 
           <MultiChatSocket {...chatProps} />
           <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>

        </div>
    )
}

export default ChatsPage