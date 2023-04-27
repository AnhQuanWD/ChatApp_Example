import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src="data:image/jpeg;base64,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" alt="" />
        <div className="userChatInfo">
          <span>MESSI</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="data:image/jpeg;base64,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" alt="" />
        <div className="userChatInfo">
          <span>MESSI</span>
          <p>How are you?</p>
        </div>
      </div>
      <div className="userChat">
        <img src="data:image/jpeg;base64,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" alt="" />
        <div className="userChatInfo">
          <span>MESSI</span>
          <p>Where are you now?</p>
        </div>
      </div>
    </div>
  )
}

export default Chats