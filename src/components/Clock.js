import React from 'react'
import './Clock.css';

export default class Clock extends React.Component {

    render() {

        const secAngle = -90 + (360/60) * this.props.sec;
        const minAngle = -90 + (360/60) * this.props.mm;
        const hAngle = -90 + (360/12) * this.props.hh;      

        return (
            <div>
                <div className="clock">
                Clock
                    <div className="clock-center"></div>
                    <div className="clock-hand hours-hand" style={{transform: `translateY(-50%) rotate(${hAngle}deg)`}}></div>
                    <div className="clock-hand minutes-hand" style={{transform: `translateY(-50%) rotate(${minAngle}deg)`}}></div>
                    <div className="clock-hand seconds-hand" style={{transform: `translateY(-50%) rotate(${secAngle}deg)`}}></div>
                </div>
            </div>
        )
    }
}

