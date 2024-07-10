import axios from 'axios'
				export const connecttoapi = () => {
    						return axios.create({
        				baseURL:   'https://localhost:7099/api/',
        				});
				} 
			