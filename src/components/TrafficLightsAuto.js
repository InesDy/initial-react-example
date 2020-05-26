import React from 'react';

import TrafficLights from './TrafficLights';

export default class TrafficLightsAuto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            greenIsOn: false,
            redIsOn: true,
            yellowIsOn: false,
        };
    }

    render() {
        return (
            <div className="traffic-lights-controlled">
                <TrafficLights
                    greenIsOn={this.state.greenIsOn}
                    redIsOn={this.state.redIsOn}
                    yellowIsOn={this.state.yellowIsOn}
                />
            </div>
        )
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.greenIsOn) {
                this.setState({
                    greenIsOn: false,
                    yellowIsOn: true,
                    redIsOn: false,
                    previousLight: 'green'
                });
             
                

            } else if (this.state.yellowIsOn && this.state.previousLight === 'green') {
                this.setState({
                    greenIsOn: false,
                    yellowIsOn: false,
                    redIsOn: true,
                });
            } else if (this.state.redIsOn){
                this.setState({
                    greenIsOn: false,
                    yellowIsOn: true,
                    redIsOn: false,
                    previousLight: 'red'
                });
            }else if (this.state.yellowIsOn && this.state.previousLight === 'red')
                this.setState({
                    greenIsOn: true,
                    yellowIsOn: false,
                    redIsOn: false,
            });

        }, 3000);
    }
}