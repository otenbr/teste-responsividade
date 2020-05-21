import axios from 'axios';
import https from 'https';

const api = axios.create({
  baseURL: 'http://dummy.restapiexample.com/api/v1',
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

export default api;
