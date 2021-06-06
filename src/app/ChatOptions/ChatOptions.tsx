import React, { SyntheticEvent, useEffect, useState } from 'react';
import ChatCreationForm from '../../models/ChatCreationForm';
import './ChatOptions.css';
import closeButton from '../assets/close.svg'

interface ChatOptions {
    createConversation: Function
    backToHomeScreen: Function
}

function ChatOptions({ createConversation, backToHomeScreen }: ChatOptions) {
    const [formData, setFormData] = useState<ChatCreationForm>({
        subject: "",
        isPublic: "false",
        persist: "true"
    })

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        createConversation(formData)
    }

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value })
    }

    const handleIsPublicSwitch = () => {
        const value:string= formData.isPublic === "true" ? "false" : "true"
        setFormData({ ...formData, isPublic: value })
    }

    const handlePersistSwitch = () => {
        const value:string= formData.persist === "true" ? "false" : "true"
        setFormData({ ...formData, persist: value })
    }

    function closeModal() {
        backToHomeScreen()
    }

    return (
        <div className="options-modal">
            <div className="closing-modal">
                        <img className="close-btn" alt="x" onClick={closeModal} src={closeButton} />
             </div>
            <form onSubmit={handleSubmit}>
                <div className="form-section" style={{padding: "15px 0px 5px 0px", borderBottom: "solid black 1px"}}>
                   Nova Conversa
                </div>
                <div className="form-section">
                    <label htmlFor="subject">Assunto:</label>
                    <input id="subject" type="text" name="subject" onChange={handleChange} />
                </div>
                <div className="form-section">
                    <div className="form-row" >
                        <div id="private-option-button-container">
                            <label htmlFor="isPublic">{formData.isPublic === "true" ? "É público " : "É privado "}</label>
                            <label className="switch">
                                <input type="checkbox" checked={formData.isPublic === "false"} onChange={handleIsPublicSwitch} />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div id="disposable-option-button-container">
                            <label htmlFor="isPublic">{formData.persist === "false" ? "Descartada após terminada" : "Não descartada"}</label>
                            <label className="switch">
                                <input type="checkbox" checked={formData.persist === "false"} onChange={handlePersistSwitch} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-section" style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button className="create-form-button" onSubmit={handleSubmit} type="submit">Criar</button>
                </div>
            </form>
        </div>
    )
}

export default ChatOptions