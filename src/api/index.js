import axios from 'axios'

const url = 'http://localhost/5000/lucky';

export const fetchLucky = () => axios.get(url);