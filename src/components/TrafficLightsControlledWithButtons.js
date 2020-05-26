import React from 'react';
import './TrafficLightsBtns.css'
import TrafficLights from './TrafficLights';

export default class TrafficLightsControlledWithButtons extends React.Component {
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

                <div className="traffic-lights-controlled__buttons">
                    <button
                        onClick={() => {
                            this.setState({
                                greenIsOn: true,
                                redIsOn: false,
                                yellowIsOn: false,
                            });
                        }}
                    >
                        Turn green on
                    </button>


                    <button
                        onClick={() => {
                            this.setState({
                                greenIsOn: false,
                                redIsOn: false,
                                yellowIsOn: true,
                            });
                        }}
                    >
                        Turn yellow on
                    </button>

                    <button
                        onClick={() => {
                            this.setState({
                                greenIsOn: false,
                                redIsOn: true,
                                yellowIsOn: false,
                            });
                        }}
                    >
                        Turn red on
                    </button>
                </div>
            </div>
        )
    }
}
