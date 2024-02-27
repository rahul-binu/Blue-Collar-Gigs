import axios from 'axios';
import { authHeaderMaker } from '../config/tokens';

const REST_API_BASE_URL = 'http://localhost:8080/api/worker';
const headers = authHeaderMaker();

export const getWorkerData = (userId) => axios.get(REST_API_BASE_URL + '/' + userId, { headers });

export const getAllWorkersAPI = ()=> axios.get(REST_API_BASE_URL,{headers});

export const createWorker = (worker) => axios.post(REST_API_BASE_URL, worker, { headers });

export const updateWorker = (worker, id) => axios .put(REST_API_BASE_URL +'/'+id,worker,{headers});

export const getAllWorkersProfileAPI = ()=> axios.get('http://localhost:8080/api/profiles',{headers});