import React,{createContext} from 'react'


//context instance
export const ChatContext = createContext()

// context provider
function ChatProvider(props) {
  return (
    <ChatContext.Provider value={{ }}>
        {props.children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
