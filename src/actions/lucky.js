import * as api from '../api';

//action creators

export const getLucky = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLucky();
        diapatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }

}