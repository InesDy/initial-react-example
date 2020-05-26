import React from 'react';

class AddressBook extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [
                {
                  firstName: "Hawkins",
                  lastName: "Solomon",
                  company: "Yandex",
                  phone: "+1 (934) 504-2067",
                },
                {
                  firstName: "Shelton",
                  lastName: "Frost",
                  company: "Yahoo!",
                  phone: "+1 (980) 571-2853",
                },
                {
                  firstName: "Mckenzie",
                  lastName: "Rasmussen",
                  company: "Google",
                  phone: "+1 (812) 496-2735",
                }
            ],

            selectedIndex: 0,
        };
    }

    render() {
        const { users, selectedIndex } = this.state;

        const {
            firstName,
            lastName,
            company,
            phone
        } = this.state.users[selectedIndex];

        return (
            <div>
                <div style={{ margin: 10 }}>
                    { users.map(({ firstName, lastName, phone }, index) => {
                        if (index === selectedIndex) {
                            return (
                                <div
                                    style={{
                                        padding: 5,
                                        border: `1px solid red`,
                                        marginBottom: 4
                                    }}
                                >
                                    <div>
                                        <input type="text" placeholder="First name" value={firstName} onChange={(event) => {
                                            const updatedArray = users.slice();
                                            updatedArray[selectedIndex].firstName = event.target.value;

                                            this.setState({
                                                users: updatedArray,
                                            })
                                        }}/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Last name" value={lastName} onChange={(event) => {
                                            const updatedArray = users.slice();
                                            updatedArray[selectedIndex].lastName = event.target.value;

                                            this.setState({
                                                users: updatedArray,
                                            })
                                        }}/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Company" value={company} onChange={(event) => {
                                            const updatedArray = users.slice();
                                            updatedArray[selectedIndex].company = event.target.value;

                                            this.setState({
                                                users: updatedArray,
                                            })
                                        }}/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone number" value={phone} onChange={(event) => {
                                            const updatedArray = users.slice();
                                            updatedArray[selectedIndex].phone = event.target.value;

                                            this.setState({
                                                users: updatedArray,
                                            })
                                        }}/>
                                    </div>
                                </div>
                            )
                        }

                        return (
                            <div
                                style={{
                                    padding: 5,
                                    border: `1px solid black`,
                                    marginBottom: 4
                                }}

                                onClick={() => this.setState({
                                    selectedIndex: index,
                                })}
                            >
                                <span style={ { marginLeft: 5 } }>
                                    { firstName }
                                </span>
                                <span style={ { marginLeft: 5 } }>
                                    { lastName }
                                </span>
                                <span style={ { marginLeft: 5 } }>
                                    { phone }
                                </span>
                            </div>
                        );
                    }) }

                    <div
                        style={{
                            padding: 5,
                            color: 'white',
                            backgroundColor: 'red',
                            marginBottom: 4,
                            textAlign: 'center',
                        }}

                        onClick={() => {
                            const newArray = this.state.users.slice();
                            newArray.push({});

                            const newSelectedIndex = newArray.length - 1;

                            this.setState({
                                users: newArray,
                                selectedIndex: newSelectedIndex,
                            });
                        }}
                    >
                        +
                    </div>
                </div>
            </div>
        );
    }
}

export default AddressBook;