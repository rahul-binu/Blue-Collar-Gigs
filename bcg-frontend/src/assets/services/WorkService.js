import { authHeaderMaker } from "../config/tokens";

import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/job";

const headers = authHeaderMaker();

export const createWork = (work) => axios.post(REST_API_BASE_URL, work, { headers });

export const getAllWorks = () => axios.get(REST_API_BASE_URL, { headers });

export const getJBIdAPI = (jid) => axios.get(REST_API_BASE_URL + '/' + jid, { headers });

// export const updateWorkDataAPI = (wid, work) => axios.put('http://localhost:8080/api/job/' + wid, work, { headers });
export const updateWorkDataAPI = (work, wid) => axios.put(`http://localhost:8080/api/job/` + wid, work, { headers });

export const updateWorkAPI = (wid, work) => axios.put('http://localhost:8080/api/jobstatus/' + wid, work, { headers });

export const getWorkByKey = (key) => axios.get("http://localhost:8080/api/jobsearch/" + key, { headers });