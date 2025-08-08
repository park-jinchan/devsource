import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
// import MyComp from './App00.jsx';
import App from './App10.jsx';
import 'bootstrap/dist/css/bootstrap.css';
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <>
            <App />
            {/* <MyComp /> */}
        </>
    </StrictMode>
);
