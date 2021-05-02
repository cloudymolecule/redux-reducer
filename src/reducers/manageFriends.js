export function manageFriends(state = {friends: []}, action){
    console.log(action.friend)
    switch(action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            const newState = state.friends.filter(friend => friend.id !== action.id)
            return {...state, friends: newState}
        default:
            return state
    }
}
