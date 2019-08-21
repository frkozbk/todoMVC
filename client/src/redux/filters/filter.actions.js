export const showAll = () => dispatch  => {
    dispatch({
        type:'SHOW_ALL'
    })
}
export const showCompleted = () => dispatch => {
    dispatch({
        type: 'SHOW_COMPLETED'
    })
}
export const showActive = () => dispatch => {
    dispatch({
        type: 'SHOW_ACTIVE'
    })
}
