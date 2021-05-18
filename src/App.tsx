import React from 'react';

import './App.css';
import Logo from './components/Logo';
import HeaderSearch from './components/HeaderSearch';

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <header>
                <Logo />
                <HeaderSearch />
            </header>
        </div>
    );
};

export default App;
