import './Chat.css'
import Logo from '../../assets/images/logo.png'

function Chat() {

  return (
    <div className="Chat--container">
        <div className="side--pannel">
            <div className="title">Nepal Engineering Collage(NEC)</div>
        </div>
        <div className="main--pannel">
            <div className="chat--head">
              <img className='chat--logo' src ={Logo}/>
              <div className="chat--head--title">LUCY</div>
            </div>
            <div className="chat--message-container">
              <div className="chat--sent--message">
                <p>Hello! This is nec chatBot.  </p>
              </div>
              <span><img className='chat--logo' src ={Logo}/></span>
            </div>
            <div className="chat--message">
              <div className="chat--message-box">
                <input type="text" placeholder='Write your Message'/>
              </div>
              <div className="chat--message-enter">Send</div>
            </div>
        </div>
    </div>
  )
}

export default Chat
