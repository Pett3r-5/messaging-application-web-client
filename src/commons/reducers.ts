import Conversation from "../models/Conversation"
import User from "../models/User"


interface AppState { 
    user: User, 
    openedConversation: Conversation, 
    conversationList:  Conversation[]
}

export const userReducer = (state: any, action:{type: string, payload: User})=> {
    switch(action.type) {
        case 'update-user': 
            return action.payload
        default: 
            return state
    }
}

export const openedConversationReducer = (state: any, action:{type: string, payload: Conversation})=> {
    switch(action.type) {
        case 'upsert-conversation': 
            return action.payload
        default: 
            return state
    }
}


export const appReducer = (state: AppState , action:any)=> {
    switch(action.type) {
        case 'update-user': 
            return {...state, user: action.payload }
        case 'update-opened-conversation': 
            return {...state, openedConversation: action.payload }
        case 'replace-conversations': 
            return {...state, conversationList: action.payload }
        case 'push-conversations': 
            return {...state, conversationList: [...state.conversationList, action.payload ] }        
        default: 
            return state
    }
}