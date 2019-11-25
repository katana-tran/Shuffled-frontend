import React, {Component} from 'react';
import ChatsList from './ChatsList'


class HomePage extends Component {
    state = {}
    render(){
        return(
            <div>
               <ChatsList/>
            </div>

        );
    }
}

export default HomePage;