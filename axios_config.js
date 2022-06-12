import axios from "axios";

const breakingBadApi = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/'
})

const uploadMediaApi = axios.create({
  baseURL: 'https://upload.twitter.com/1.1/media',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export { breakingBadApi, uploadMediaApi }
