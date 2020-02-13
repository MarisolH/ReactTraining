import { ApiAxios, AuthAxios } from "../services/Axios";
const URI_DEV = 'https://appsdev.cotemar.com.mx/TiendaApi/'
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

    getProducts(){
        const url = `${URI_DEV}api/Products`;
        const method ='GET';
        return this.makeAuthorizedRequest({url,method});
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

