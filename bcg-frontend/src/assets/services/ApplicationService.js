import { authHeaderMaker } from "../config/tokens";

import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/application";

const headers = authHeaderMaker();

export const createApplicationReq = (applicationReq) => axios.post(REST_API_BASE_URL, applicationReq, { headers });

export const applicationCheckByJUId = (jid, uid) => {
    const url = `${REST_API_BASE_URL}/${jid}/${uid}`;
    return axios.get(url, { headers: headers }); 
};