import { authHeaderMaker } from "../config/tokens";

import axios from "axios";

const REST_API_BASE_URL="http://localhost:8080/api/job";

const headers = authHeaderMaker();

export const createWork = (work) => axios.post(REST_API_BASE_URL, work, { headers });

export const getAllWorks = () =>axios.get(REST_API_BASE_URL,{headers});
