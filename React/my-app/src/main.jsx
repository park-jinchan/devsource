// main.jsx (또는 index.jsx)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // ✅ App으로 변경
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
