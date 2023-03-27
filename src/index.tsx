import * as ReactDOMClient from 'react-dom/client';
import App from './App';
const dom = document.getElementById("root")

const root = ReactDOMClient.createRoot(dom as HTMLElement)
root.render(<App />);