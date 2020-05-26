import React from 'react';
import Clock from './Clock';
import { render } from '@testing-library/react';


export default class CurrentTime extends React.Component {
    constructor (props) {
        super(props);

        const fullDate = new Date();

        this.state = {
            hours: fullDate.getHours(),
            minutes: fullDate.getMinutes(),
            seconds: fullDate.getSeconds(),
        }
    }

    render() {

        return (
            <Clock
            hh={this.state.hours}
            mm={this.state.minutes}
            sec={this.state.seconds}  
            />
        )
    }

    componentDidMount ()
    {
        setInterval(() => {
            const fullDate = new Date();
            this.setState({
                hours: fullDate.getHours(),
                minutes: fullDate.getMinutes(),
                seconds: fullDate.getSeconds(),
            })
        },  1000);
        }

}
