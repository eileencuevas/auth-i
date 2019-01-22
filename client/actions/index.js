import axios from 'axios';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

const api = 'http://localhost:5000/api/';

// export default fetchUsers = () => dispatch => {
//     dispatch({ type: FETCH_USERS_START });
//     axios
//         .get(`${url}users/`)
//         .then(response)
//         .catch();
// }