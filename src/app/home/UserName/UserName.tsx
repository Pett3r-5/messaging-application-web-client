import { SyntheticEvent, useContext, useState } from 'react';
import User from '../../../models/User';
import './UserName.css';
import toolIcon from '../../assets/tool_icon_151041.svg'
import tickLogo from '../../assets/check_accept_done_tick_icon_143633.svg'
import { baseUrls, defaultHeader } from '../../../commons/http-constants';
import { ConversationListContext, UserContext } from '../../App';


function UserName() {
    const { user, setUser } = useContext(UserContext)
    const { getConversationList } = useContext(ConversationListContext)
    const [isInputEnabled, setIsInputEnabled] = useState<boolean>(false)

    const editName = (event: SyntheticEvent) => {
        event.preventDefault()
        setIsInputEnabled(true)
    }

    const handleChange = (event: any) => {
        if(setUser) {
            setUser({...user, name: event.currentTarget.value})
        }
    }

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault()
        if (user && setUser && getConversationList) {

            let data: User | undefined = undefined
            try {
                const dataUnparsed = await fetch(`${baseUrls.applicationServiceUrl}/user/name/${user.name}`,
                    {
                        method: 'PUT',
                        headers: defaultHeader,
                        body: JSON.stringify({ clientId: user.clientId, name: user.name })
                    })

                await Promise.all([
                    fetch(`${baseUrls.applicationServiceUrl}/message/user/name`,
                        {
                            method: 'PUT',
                            headers: defaultHeader,
                            body: JSON.stringify({ id: user.clientId, name: user.name })
                        }),
                    fetch(`${baseUrls.applicationServiceUrl}/conversation/users/name`,
                        {
                            method: 'PUT',
                            headers: defaultHeader,
                            body: JSON.stringify({ id: user.clientId, name: user.name })
                        })
                ])

                data = await dataUnparsed.json()

            } catch (error) {
                console.log(error)
            }
            if (!!data) {
                setUser({ clientId: data.clientId, name: data.name })
            }

            getConversationList(user.clientId)
            setIsInputEnabled(false)
        }
    }

    return (
        <div>
            {!!isInputEnabled ?
                <form className="welcome-sentence" onSubmit={handleSubmit}>
                    <div id="welcome-user">Bem-vindo,
                <input id="input-name" placeholder={user?.name || "guest"} onChange={handleChange} name="name" value={user?.name} />!
                </div>
                    <button type="submit" id="edit-button">
                        <img src={tickLogo} id="tool-icon" />
                    </button>
                </form>
                :
                <div style={{ margin: 25, display: "flex", flexDirection: "row" }}>
                    <div id="welcome-user">Bem-vindo, {user?.name || "guest"}! </div>
                    <button id="edit-button" onClick={(event) => editName(event)}>
                        <img src={toolIcon} id="tool-icon" />
                    </button>
                </div>}
        </div>
    )
}

export default UserName