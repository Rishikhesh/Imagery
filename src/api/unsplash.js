import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ylyq5P2whrxiECE6cd_Dif3SVqF9QyfsDfY66EPfZgE'
  }
});
