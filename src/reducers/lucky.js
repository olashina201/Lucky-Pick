export default (lucky = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return lucky;
        default:
            returnlucky
    }
}