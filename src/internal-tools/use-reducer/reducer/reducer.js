const reducer = (state, action) => {
    switch (action.type) {
        case 'BUTTON_CLICK':
            return { ...state, counter: state.counter + 1 };
        case 'SET_USER_NAME':
            return { ...state, username: action.payload };
        default:
            return state;
    }
};

export default reducer;
