export default (lucky = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...lucky, action.payload]
        default:
            return lucky
    }
}