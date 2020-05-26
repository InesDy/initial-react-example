import React from 'react';

import cats from './components/cats';
import FrameForImage from './components/FrameForImage';
import TrafficLights from './components/TrafficLights';
import TrafficLightsControlledWithButtons from './components/TrafficLightsControlledWithButtons';
import TrafficLightsAuto from './components/TrafficLightsAuto';
import Clock from './components/Clock';
import CurrentTime from './components/CurrentTime';
import AddressBookForm from './components/AddressBookForm';
import AddressBookList from './components/AddressBookList';
import AddressBook from './components/Addressbook'

import './App.css';


const App = () => (
    <div className="app">
        <div className="left-sidebar left-sidebar--visible">

            <div className="left-sidebar__toolbar">
                Navigation
            </div>

            <a
                href="/?page=cats-gallery"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=cats-gallery' && 'sidebar-navigation-item--active')
                }
            >
                Cats gallery
            </a>

            <a
                href="/?page=traffic-lights"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=traffic-lights' && 'sidebar-navigation-item--active')
                }
            >
                Traffic lights
            </a>

            <a
                href="/?page=traffic-lights-controlled-btns"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=traffic-lights-controlled-btns' && 'sidebar-navigation-item--active')
                 }
            >
                 Traffic lights Controlled with buttons
            </a>

             <a
                href="/?page=traffic-lights-automatic"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=traffic-lights-automatic' && 'sidebar-navigation-item--active')
                }
            >
                Traffic lights auto
            </a>

            <a
                href="/?page=clock"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=clock' && 'sidebar-navigation-item--active')
                }
            >
                Clock
            </a>

            <a
                href="/?page=address-book"
                className={
                    'sidebar-navigation-item ' +
                    (window.location.search === '?page=address-book' && 'sidebar-navigation-item--active')
                }
            >
                Address Book
            </a>





    </div>
            <div className="main-section__toolbar">

                {window.location.search === '?page=cats-gallery' && 'Cats gallery'}

                {window.location.search === '?page=traffic-lights' && 'Traffic lights'}

                {window.location.search === '?page=traffic-lights-controlled-btns' && 'Controlled buttons'}

                {window.location.search === '?page=traffic-lights-automatic' && 'Automatic change'}

                {window.location.search === '?page=clock' && 'clock'}

                {window.location.search === '?page=address-book' && 'Adress Book'}


            </div>

            {window.location.search === '?page=cats-gallery' && (
                <div className="main-section__content">

                    <h1> Some cat pictures here :-) </h1>

                    <FrameForImage
                        header={cats[0].headerText}
                        image={cats[0].imageUrl}
                    >
                        {cats[0].description}
                    </FrameForImage>

                    <FrameForImage
                        header={cats[1].headerText}
                        image={cats[1].imageUrl}
                    >
                        {cats[1].description}
                    </FrameForImage>

                    <FrameForImage
                        header={cats[2].headerText}
                        image={cats[2].imageUrl}
                    >
                        {cats[2].description}
                    </FrameForImage>
                </div>
            )}

            {window.location.search === '?page=traffic-lights' && (
                <div className="main-section__content">

                     <h1> Just some traffic lights not even interactive but smh</h1>
                   
                    <div className="container">
                       
                    <TrafficLights
                        greenIsOn={false}
                        yellowIsOn={false}
                        redIsOn={true}
                    />  

                    <TrafficLights
                        greenIsOn={false}
                        yellowIsOn={true}
                        redIsOn={false}
                    />

                     <TrafficLights
                        greenIsOn={true}
                        yellowIsOn={false}
                        redIsOn={false}
                    />
                    </div>
                        </div>
            )}
           
        
           {window.location.search === '?page=traffic-lights-controlled-btns' && (
                <div className="main-section__content">
                  
                  <h1>Traffic Lights controlled with buttons </h1>
                  

                     <TrafficLightsControlledWithButtons />
    
                 </div>
            )}

            {window.location.search === '?page=traffic-lights-automatic' && (
                <div className="main-section__content">
                    
                    <h1> Traffic Lighs are  changing by themselves </h1>

                    <TrafficLightsAuto />
    
                 </div>
            )}

            {window.location.search === '?page=clock' && (
                <div className="main-section__content">
                  
                  <h1>Clock o' time</h1>
                 <CurrentTime />
                        </div>
                    )}

            {window.location.search === '?page=address-book' && (
                <div className="main-section__content">
                  
                  <h1>Smh</h1>
                  <AddressBook />
            
             
                    </div> )}      
        </div>
            );
        
export default App