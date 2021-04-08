import './DesktopHeader.css'
import closeXIcon from '../assets/close.svg'
const remote = window.require('electron').remote;


function DesktopHeader() {
    const BrowserWindow = remote.BrowserWindow;

    const closeWindow = ()=> {
        const window = BrowserWindow.getFocusedWindow();
        window!.close();
    }

    return (
        <div>
            <div id="title-bar-btns">
                <img id="close-btn" alt="x" onClick={closeWindow} src={closeXIcon}/>
            </div>
        </div>
    )
}

export default DesktopHeader;