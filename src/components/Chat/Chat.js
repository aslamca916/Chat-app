import './Chat.css';

function Chat() {
  return (
    <div className="chat-div container">
      <div className="chat-heading">
        <span >Group Chat</span>
        <span >
          x
        </span>
      </div>
      <div className="chat-inner">
        <div className="scroll-div">
          <p>Hello There!!!</p>
        </div>
      </div>
      <div className="message-box">
        <div >
          <label className='form-label'><strong>Aslam</strong></label>
          <input type="text" className='form-control'></input>
          <button className='btn btn-primary me-3'>Send</button>
          <button className='btn btn-secondary me-3'>Refresh</button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Chat;
