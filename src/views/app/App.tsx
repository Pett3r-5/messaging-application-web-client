import React, { useEffect, useState } from 'react';
import './App.css';
import bubbleIcon from '../assets/speech-bubble-svgrepo-com.svg'
import JoinContainer from './join-container/JoinContainer';
import io from 'socket.io-client';

function App() {

  useEffect(()=>{

    const socket = io("http://localhost:5000");
    socket.on('connect', function(){
      console.log("Connected")
      socket.emit("test-event", {prop: "some word"})
    });
    

    socket.on('disconnect', function(){
      console.log("Disconnected")
    });
  }, [])


  return (
    <div className="App">
      <div style={{margin:50}}>
        <img style={{height:100}} alt="logo" src={bubbleIcon}/>
      </div>

      <div>
        <button className="creation-button">
        Criar conversa
        </button>
      </div>
      <JoinContainer/>
      
    </div>
  );
}

export default App;
