import React from 'react';

import GreetingModule from 'client/components/modules/Greeting/Greeting';


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <GreetingModule />
            </div>
        );
    }
}


export default HomePage;
