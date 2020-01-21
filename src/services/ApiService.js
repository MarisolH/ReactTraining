import { ApiAxios, AuthAxios } from "../services/Axios";

export default {
    //--
    async getNewToken(refresh_token) {
        const url = '/oauth/token...';
        const method = 'POST';
        const data = {
            grant_type: 'refresh_token',
            refresh_token
        };
        return this.makeRequest({ method, url, data });
    },

    async makeRequest(requestData = {}) {

        let res = await AuthAxios(requestData);
        return res.data;
    },

    async makeAuthorizedRequest(requestData = {}) {
        let res = await ApiAxios(requestData);
        return res.data;
    },
    makeQueryParams (obj ='', params) {
		let queries ='';
		for(var key in params){
			if(Array.isArray(params[key])){
				// eslint-disable-next-line no-loop-func
				params[key].map(item => queries += `${obj}${key}=${item}&`);
			} else queries += `${obj}${key}=${params[key]}&`;
		}
		return queries;
    },
};

