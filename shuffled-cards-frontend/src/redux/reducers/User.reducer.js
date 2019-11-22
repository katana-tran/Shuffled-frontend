const initialState = {
    userDeck: [],
    user: {
        name: "USERNAME"
    }
}

const UserReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_DECK':
            return {
                ...state,
                userDeck: action.payload
            }
        default:
            return state
    }
}

export default UserReducer