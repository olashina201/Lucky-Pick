import * as api from '../api';

//action creators

export const getLuckys = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLucky();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }

}

export const createLucky = (lucky) => async (dispatch) => {
    try {
        const { data } = await api.createLucky(lucky);
        dispatch( { type: 'CREATE', payload: data } )
    } catch (error) {
        console.log(error);
    }
}