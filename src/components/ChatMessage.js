const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm">
       <img
          className="h-8"
          alt="userIcon"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        /> 
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage