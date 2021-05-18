import React from 'react';

import './App.css';
import Logo from './components/Logo';

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <header>
                <Logo />
            </header>
        </div>
    );
};

export default App;
