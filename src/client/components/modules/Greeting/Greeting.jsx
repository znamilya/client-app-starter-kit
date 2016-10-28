import React from 'react';

import Greeting from 'client/components/common/Greeting/Greeting';


class GreetingModule extends React.Component {
    render() {
        return (
            <div>
                <Greeting message="Hello!" />
            </div>
        );
    }
}


export default GreetingModule;