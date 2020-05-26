import React from 'react';

class AddressBookForm extends React.Component {
    render() {
        return (
            <form style={{ margin: 10 }}>
                <div>
                    <input type="text" placeholder="First name"/>
                </div>
                <div>
                    <input type="text" placeholder="Last name"/>
                </div>
                <div>
                    <input type="text" placeholder="Company"/>
                </div>
                <div>
                    <input type="text" placeholder="Phone number"/>
                </div>

                <input type="submit" value="Save"/>
            </form>
        );
    }
}

export default AddressBookForm;