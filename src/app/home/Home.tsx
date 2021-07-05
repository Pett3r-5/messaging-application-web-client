import './Home.css';
import JoinContainer from './join-container/JoinContainer';
import UserName from './UserName/UserName';

import appLogo from '../assets/bubble-logo5.png'

interface HomeProps {
    showNewChatOptions: Function
}

function Home({ showNewChatOptions }: HomeProps) {
    
    const onClickOpenNewConversation = ()=> {
      showNewChatOptions()
    }


  
    return (

      <div className="home-container">
        <div style={{margin:25}}>
          <img style={{height:90}} alt="logo" src={appLogo}/>
        </div>
        <UserName/>
        <div>
            <button className="creation-button" onClick={onClickOpenNewConversation}>
            Criar conversa
            </button>
        </div>
        <JoinContainer/>
        
      </div>
      
    );
  }
  
  
  export default Home;
  