import './options.css';
import ReactDOM from "react-dom/client";

// Put here the code for your Options Page
function Options(): JSX.Element {
    return (<>
        <h3>OPTIONS VIEW</h3>
    </>);
};

const container = document.createElement('div');
document.body.appendChild(container);
const root = ReactDOM.createRoot(container);
root.render(<Options />);
