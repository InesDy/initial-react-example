import React from 'react';

class AddressBookList extends React.Component {
    render() {
        const {
            users = [ // set default value if users === undefined
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
            ]
        } = this.props;

        return (
            <div>
                { users.map(({ firstName, lastName, phone }) => {
                    return (
                        <div>
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
            </div>
        );
    }
}

export default AddressBookList;