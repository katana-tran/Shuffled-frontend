import React, {Component} from 'react';
import ChatsList from './ChatsList'
import { connect } from 'react-redux'
import {API_ROOT} from '../constants/API.constants'
import {setUserData} from '../redux/actions/User.actions'

class HomePage extends Component {
    componentDidMount(){
        fetch(`${API_ROOT}/findUserData`, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: localStorage.getItem('token')
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }

    render(){
        return(
            <div>
               <ChatsList/>
            </div>

        );
    }
}

const mapStateToProps = state => { 
    return {
        user: state.UserReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserData: userData => dispatch(setUserData(userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);