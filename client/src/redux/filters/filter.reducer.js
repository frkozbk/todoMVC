export default (state='SHOW_ALL',action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            return 'SHOW_ALL'
        case 'SHOW_COMPLETED':
            return 'SHOW_COMPLETED'
        case 'SHOW_ACTIVE':
            return 'SHOW_ACTIVE'
        default:
            return state
    }
}