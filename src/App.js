import React from 'react';

import Navigation from './components/Navigation'

import TrafficLightsControlledWithButtonsPage from './pages/TrafficLightsControlledWithButtonsPage';
import TrafficLightsAutoPage from './pages/TrafficLightsAutoPage';
import CurrentTimePage from './pages/CurrentTimePage';
import AdressBookPage from './pages/AdressBookPage';
import FrameForImagePage from './pages/FrameForImagePage';
import './App.css';



const App = () => (
    <div className="app">  
          < Navigation />
  
          <div className="main-section main-section--with-left-sidebar">
            <div className="main-section__toolbar">
                {window.location.search === '' && 'Cats gallery'}
            </div>

                {window.location.search === '?page=cats-gallery' && <FrameForImagePage />}

                {window.location.search === '?page=traffic-lights-controlled-btns' && <TrafficLightsControlledWithButtonsPage />}

                {window.location.search === '?page=traffic-lights-automatic' && <TrafficLightsAutoPage />}

                {window.location.search === '?page=clock' && <CurrentTimePage />}

                {window.location.search === '?page=address-book' && <AdressBookPage />}          
</div>
                </div>
);

        
        
        
export default App;