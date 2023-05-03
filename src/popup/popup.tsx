import './popup.css';
import ReactDOM from "react-dom/client";

// Put here the code for your Popup
function Popup(): JSX.Element {
    return (<>
        <div className='wrapper'>
            <h4>POPUP VIEW</h4>
        </div>
    </>);
};

const container = document.createElement('div');
document.body.appendChild(container);
const root = ReactDOM.createRoot(container);
root.render(<Popup />);
